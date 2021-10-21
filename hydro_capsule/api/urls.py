from django.urls import path, include
from rest_framework.routers import SimpleRouter
from hydro_capsule.api.views import (
    CapsuleViewSet,
    PlantTypeViewSet,
    PlantViewSet,
    GrowRuleViewSet,
    SlotViewSet,
    FertilizerViewSet,
    FertilizerInRuleViewSet,
    FertilizerInSlotViewSet
)

router = SimpleRouter()

router.register("capsules", CapsuleViewSet)
router.register("plant_types", PlantTypeViewSet)
router.register("plants", PlantViewSet)
router.register("grow_rules", GrowRuleViewSet)
router.register("slots", SlotViewSet)
router.register("fertilizers", FertilizerViewSet)
router.register("fertilizer_in_rules", FertilizerInRuleViewSet)
router.register("fertilizer_in_slots", FertilizerInSlotViewSet)

urlpatterns = [
    path("", include(router.urls))
]
