from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
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


class CapsuleSerializer(ModelSerializer):

    class Meta:
        model = Capsule
        fields = "__all__"


class PlantTypeSerializer(ModelSerializer):

    class Meta:
        model = PlantType
        fields = "__all__"


class PlantSerializer(ModelSerializer):
    plant_type = PlantTypeSerializer()

    class Meta:
        model = Plant
        fields = "__all__"


class GrowRuleSerializer(ModelSerializer):

    class Meta:
        model = GrowRule
        fields = "__all__"


class FertilizerSerializer(ModelSerializer):

    class Meta:
        model = Fertilizer
        fields = "__all__"


class FertilizerInRuleSerializer(ModelSerializer):

    class Meta:
        model = FertilizerInRule
        fields = "__all__"


class FertilizerInSlotSerializer(ModelSerializer):

    fertilizer = FertilizerSerializer()

    class Meta:
        model = FertilizerInSlot
        fields = "__all__"


class SlotSerializer(ModelSerializer):

    fertilizers_in_slot = FertilizerInSlotSerializer(many=True)

    class Meta:
        model = Slot
        fields = "__all__"
