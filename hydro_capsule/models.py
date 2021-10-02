from django.db import models


class NamedEntry(models.Model):

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        abstract = True


class Capsule(NamedEntry):

    slots_count = models.PositiveIntegerField()
    power = models.FloatField()
    radiation = models.FloatField()
    temprature = models.FloatField()
    went_speed = models.FloatField()


class PlantType(NamedEntry):
    description = models.TextField()


class Plant(models.Model):
    plant_type = models.ForeignKey(
        "hydro_capsule.PlantType",
        on_delete=models.CASCADE,
        related_name="plants"
    )


class GrowRule(NamedEntry):
    plant = models.ForeignKey(
        "hydro_capsule.Plant",
        on_delete=models.CASCADE,
        related_name="rules"
    )
    is_active = models.BooleanField(default=True)


class Slot(NamedEntry):

    radiation = models.FloatField()
    capsule = models.ForeignKey(
        "hydro_capsule.Capsule",
        on_delete=models.CASCADE,
        related_name="slots"
    )
    plant = models.ForeignKey(
        "hydro_capsule.Plant",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="slots"
    )


class Fertilizer(NamedEntry):
    pass


class FertilizerInSlot(models.Model):

    capacity = models.FloatField()
    fertilizer = models.ForeignKey(
        "hydro_capsule.Fertilizer",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="fertilizers_in_slot"
    )
    slot = models.ForeignKey(
        "hydro_capsule.Slot",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="fertilizers_in_slot"
    )


class FertilizerInRule(models.Model):

    how_mutch = models.FloatField()
    grow_rule = models.ForeignKey(
        "hydro_capsule.GrowRule",
        on_delete=models.CASCADE,
        related_name="fertilizers_in_rule"
    )
    fertilizer = models.ForeignKey(
        "hydro_capsule.Fertilizer",
        on_delete=models.SET_NULL,
        related_name="fertilizers_in_rule",
        null=True,
    )
    up_limit = models.FloatField()
    down_limit = models.FloatField()
