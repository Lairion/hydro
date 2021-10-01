from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from hydro_capsule.models import (
    Capsule,
    PlantType,
    Plant,
    GrowRule,
    Slot,
    Fertilizer,
    FertilizerInSlot,
    FertilizerInRule
)
from hydro_capsule.api.serializers import (
    CapsuleSerializer,
    PlantTypeSerializer,
    PlantSerializer,
    SlotSerializer,
    GrowRuleSerializer,
    FertilizerSerializer,
    FertilizerInSlotSerializer,
    FertilizerInRuleSerializer
)


class CapsuleViewSet(ModelViewSet):

    queryset = Capsule.objects.all()
    serializer_class = CapsuleSerializer


class PlantTypeViewSet(ModelViewSet):

    queryset = PlantType.objects.all()
    serializer_class = PlantTypeSerializer


class PlantViewSet(ModelViewSet):

    queryset = Plant.objects.all()
    serializer_class = PlantSerializer


class GrowRuleViewSet(ModelViewSet):

    queryset = GrowRule.objects.all()
    serializer_class = GrowRuleSerializer


class SlotViewSet(ModelViewSet):

    queryset = Slot.objects.all()
    serializer_class = SlotSerializer


class FertilizerViewSet(ModelViewSet):

    queryset = Fertilizer.objects.all()
    serializer_class = FertilizerSerializer


class FertilizerInRuleViewSet(ModelViewSet):

    queryset = FertilizerInRule.objects.all()
    serializer_class = FertilizerInRuleSerializer


class FertilizerInSlotViewSet(ModelViewSet):

    queryset = FertilizerInSlot.objects.all()
    serializer_class = FertilizerInSlotSerializer
