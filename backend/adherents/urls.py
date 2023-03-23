from django.urls import path
from .views import adhesion, adhesionAll, adhesionIdView, reviewAdhesion, AdherentByStatus


urlpatterns =[
    path('adhesion',adhesion.as_view()),
    path('adhesion-all',adhesionAll.as_view()),
    path('adhesion/<int:adherent_id>',adhesionIdView.as_view()),
    path('adhesion-status/<int:adherent_id>',reviewAdhesion.as_view()),
    path('adhesionByStatus',AdherentByStatus.as_view()),
    # path('activate/<uidb64>/<token>', views.activate, name='activate')
   
   
   
]