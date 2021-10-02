from django.contrib import admin
from hydro_capsule.models import (
    Capsule,
    PlantType,
    Plant,
    GrowRule,
    Slot,
    Fertilizer,
    FertilizerInRule,
    FertilizerInSlot,
)


class SlotInLine(admin.TabularInline):
    model = Slot

class FertilizerInRuleInLine(admin.TabularInline):
    model = FertilizerInRule


class FertilizerInSlotInLine(admin.TabularInline):
    model = FertilizerInSlot


@admin.register(Capsule)
class CapsuleAdmin(admin.ModelAdmin):
    inlines = [SlotInLine]


@admin.register(PlantType)
class PlantTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Plant)
class PlantAdmin(admin.ModelAdmin):
    pass


@admin.register(GrowRule)
class GrowRuleAdmin(admin.ModelAdmin):
    inlines = [
        FertilizerInRuleInLine
    ]


@admin.register(Slot)
class SlotAdmin(admin.ModelAdmin):
    inlines = [
        FertilizerInSlotInLine
    ]


@admin.register(Fertilizer)
class FertilizerAdmin(admin.ModelAdmin):
    pass


@admin.register(FertilizerInRule)
class FertilizerInRuleAdmin(admin.ModelAdmin):
    pass


@admin.register(FertilizerInSlot)
class FertilizerInSlotAdmin(admin.ModelAdmin):
    pass
