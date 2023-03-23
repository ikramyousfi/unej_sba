from django.shortcuts import render,get_object_or_404
from .models import adherents, diplomes
from django.core.serializers import serialize
from rest_framework import generics,status
from .serializers import AdhesionSerializer, AdhesionChangeStatusSerializer, diplomeAdhesionSerializer
from rest_framework.response import Response 
from rest_framework import authentication, permissions
from django.http import JsonResponse
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from django.core.mail import send_mail
from django.utils.datastructures import MultiValueDict, MultiValueDictKeyError

#create an adhesion
class adhesion(generics.GenericAPIView):
    serializer_class = AdhesionSerializer
    
    
    def post(self, request):
        serializer=self.serializer_class(data=request.data)
        if 'photo' in request.FILES:
            print('hi')
            photo_file = request.FILES['photo']
        else:
            print('oo')
            photo_file = None # or you can set a default value or raise an error

        if 'recuPaiement' in request.FILES:
            recu_file = request.FILES['recuPaiement']
        else:
            recu_file = None # or you can set a default value or raise an error
        adherent=adherents(
            nom=request.data['nom'],
            prenom=request.data['prenom'],
            nomArabe=request.data['nomArabe'],
            prenomArabe=request.data['prenomArabe'],
            email=request.data['email'],
            phone=request.data['phone'],
            dateNaissance=request.data['dateNaissance'],
            communes=request.data['communes'],
            adresse=request.data['adresse'],
            photo=photo_file,
            recuPaiement=recu_file,
            
        )
        
      
        if serializer.is_valid():
            
            serializer.validated_data['photo']=adherent.photo 
            serializer.validated_data['recuPaiement']=adherent.recuPaiement 
            adherent.save()
            dp=request.data.pop('dp') 
            for img in dp:
                diplomes.objects.create(adherent=adherent, diplome=img)
            print(serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else :
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)  
      


#get all adherents
class adhesionAll(generics.GenericAPIView):
    serializer_class = diplomeAdhesionSerializer
    permission_classes = [permissions.IsAdminUser]
    def get(self,request):

        adherent = adherents.objects.all()
        serializer = self.serializer_class(adherent, many =True)
        return Response(serializer.data,status=status.HTTP_200_OK)


#view adherent one by one we can use pk or id same shit
class adhesionIdView(generics.GenericAPIView):
    serializer_class = diplomeAdhesionSerializer
    permission_classes = [permissions.IsAdminUser]
    def get(self, request, adherent_id):
        adherent=get_object_or_404(adherents,id=adherent_id) 
        serializer=self.serializer_class(instance=adherent)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
        



# admin accepts the request id adherent
class reviewAdhesion(generics.GenericAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = AdhesionChangeStatusSerializer
    def put(self, request, adherent_id):
        adherent=get_object_or_404(adherents,pk=adherent_id)
        ad=adherents.objects.get(pk=adherent_id)
       
        serializer=self.serializer_class(adherent,data=request.data)
        from_email = 'ikram2002yousfi@gmail.com'
        recipient_list = [ad.email]

        if (request.data['status']=="accepted"):
            
            subject = 'Adhesion Demande Acceptée'
            message = 'Félicitation '+ad.nom+' '+ad.prenom+'\n'+'Vous etes accepté parmis les adherents de Sidi Bel Abbes \nCordialement'
            send_mail(subject, message, from_email, recipient_list)
        else :
            if (request.data['status']=="rejected"):
                subject = 'Adhesion Demande Refusée'
                message = 'Sorry '+ad.nom+' '+ad.prenom+'\n'+'Vous pouvez rejoindre le bureau pour bien complèter votre dossier \nCordialement '
                send_mail(subject, message, from_email, recipient_list)
            
          
        
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK,data=serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST,data=serializer.errors)
    


#display by status
class AdherentByStatus(generics.GenericAPIView):
    serializer_class = diplomeAdhesionSerializer
    permission_classes = [permissions.IsAdminUser]
    def get(self,request):
        queryset=adherents.objects.filter(status=request.data['status'])
        serializer=self.serializer_class(queryset,many=True)

        # current_site = get_current_site(request).domain
        # relativeLink = reverse('emailverify')        
        # absurl = 'http://'+current_site+relativeLink+"?token="+str(token)
        # email_body = 'Hi There '+ user.name +' \n Use the link below to verify your email \n' + absurl
        # to_email= user.email
        #        # print(to_email)
        # data = {'email_body': email_body, 'to_email': to_email ,'email_subject': 'Verify your email'}


        return Response(serializer.data,status=status.HTTP_200_OK)

