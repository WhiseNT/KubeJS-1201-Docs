/// <reference path="./internal_*.d.ts" />
declare namespace net.minecraft.world.level.levelgen.blockpredicates {
    interface BlockPredicate extends Internal.BiPredicate<Internal.WorldGenLevel, BlockPos> {
        hasSturdyFace(arg0: Internal.Direction_): this;
        "matchesFluids(net.minecraft.core.Vec3i,net.minecraft.world.level.material.Fluid[])"(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): this;
        noFluid(arg0: Vec3i_): this;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        "matchesBlocks(java.util.List)"(arg0: Internal.List_<Internal.Block>): this;
        "allOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): this;
        matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): this;
        anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): this;
        "anyOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): this;
        noFluid(): this;
        anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): this;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        abstract test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        "matchesBlocks(net.minecraft.core.Vec3i,net.minecraft.world.level.block.Block[])"(arg0: Vec3i_, ...arg1: Internal.Block_[]): this;
        solid(arg0: Vec3i_): this;
        "allOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): this;
        insideWorld(arg0: Vec3i_): this;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        matchesTag(arg0: Internal.TagKey_<Internal.Block>): this;
        solid(): this;
        alwaysTrue(): this;
        matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): this;
        abstract type(): Internal.BlockPredicateType<any>;
        allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): this;
        matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): this;
        "matchesBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): this;
        "matchesBlocks(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): this;
        "matchesFluids(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): this;
        replaceable(): this;
        wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): this;
        matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): this;
        not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): this;
        matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): this;
        allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): this;
        anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): this;
        allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): this;
        "anyOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): this;
        hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): this;
        replaceable(arg0: Vec3i_): this;
        matchesBlocks(arg0: Internal.List_<Internal.Block>): this;
        matchesBlocks(...arg0: Internal.Block_[]): this;
        matchesFluids(...arg0: Internal.Fluid_[]): this;
        readonly CODEC: Internal.Codec<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>;
        readonly ONLY_IN_AIR_PREDICATE: (Internal.MatchingBlocksPredicate) & (net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate);
        readonly ONLY_IN_AIR_OR_WATER_PREDICATE: (Internal.MatchingBlocksPredicate) & (net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate);
    }
    type BlockPredicate_ = BlockPredicate;
}
declare namespace Internal {
    class EntitySelector {
        static withinDistance(arg0: number, arg1: number, arg2: number, arg3: number): Internal.Predicate<Internal.Entity>;
        getClass(): typeof any;
        static pushableBy(arg0: Internal.Entity_): Internal.Predicate<Internal.Entity>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        static notRiding(arg0: Internal.Entity_): Internal.Predicate<Internal.Entity>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly NO_CREATIVE_OR_SPECTATOR: Internal.Predicate<Internal.Entity>;
        static readonly LIVING_ENTITY_STILL_ALIVE: Internal.Predicate<Internal.Entity>;
        static readonly CAN_BE_COLLIDED_WITH: Internal.Predicate<Internal.Entity>;
        static readonly ENTITY_NOT_BEING_RIDDEN: Internal.Predicate<Internal.Entity>;
        static readonly CONTAINER_ENTITY_SELECTOR: Internal.Predicate<Internal.Entity>;
        static readonly ENTITY_STILL_ALIVE: Internal.Predicate<Internal.Entity>;
        static readonly NO_SPECTATORS: Internal.Predicate<Internal.Entity>;
    }
    type EntitySelector_ = EntitySelector | string;
    abstract class AxisCycle extends Internal.Enum<Internal.AxisCycle> {
        getClass(): typeof any;
        static values(): Internal.AxisCycle[];
        abstract "cycle(double,double,double,net.minecraft.core.Direction$Axis)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Direction$Axis_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.AxisCycle_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AxisCycle>>;
        abstract cycle(arg0: number, arg1: number, arg2: number, arg3: Internal.Direction$Axis_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        abstract "cycle(int,int,int,net.minecraft.core.Direction$Axis)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Direction$Axis_): number;
        abstract inverse(): this;
        abstract cycle(arg0: number, arg1: number, arg2: number, arg3: Internal.Direction$Axis_): number;
        static between(arg0: Internal.Direction$Axis_, arg1: Internal.Direction$Axis_): Internal.AxisCycle;
        abstract cycle(arg0: Internal.Direction$Axis_): Internal.Direction$Axis;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        getDeclaringClass(): typeof Internal.AxisCycle;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.AxisCycle;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(net.minecraft.core.AxisCycle)"(arg0: Internal.AxisCycle_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.AxisCycle
        static readonly AXIS_VALUES: Internal.Direction$Axis[];
        static readonly NONE: Internal.AxisCycle;
        static readonly VALUES: Internal.AxisCycle[];
        static readonly FORWARD: Internal.AxisCycle;
        static readonly BACKWARD: Internal.AxisCycle;
    }
    type AxisCycle_ = "backward" | AxisCycle | "forward" | "none";
    abstract class AbstractChestBlock <E extends Internal.BlockEntity> extends Internal.BaseEntityBlock {
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        abstract newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        abstract combine(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): Internal.DoubleBlockCombiner$NeighborCombineResult<Internal.ChestBlockEntity>;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type AbstractChestBlock_<E extends Internal.BlockEntity> = AbstractChestBlock<E>;
    class Biome$ClimateSettings extends Internal.Record {
        constructor(hasPrecipitation: boolean, temperature: number, temperatureModifier: Internal.Biome$TemperatureModifier_, downfall: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        downfall(): number;
        temperatureModifier(): Internal.Biome$TemperatureModifier;
        temperature(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        hasPrecipitation(): boolean;
        get class(): typeof any
        temperatureModifier: Internal.Biome$TemperatureModifier;
        hasPrecipitation: boolean;
        temperature: number;
        downfall: number;
        static readonly CODEC: Internal.MapCodec<Internal.Biome$ClimateSettings>;
    }
    type Biome$ClimateSettings_ = Biome$ClimateSettings;
    class Suppliers$NonSerializableMemoizingSupplier <T> implements com.google.common.base.Supplier<T> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        get(): T;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type Suppliers$NonSerializableMemoizingSupplier_<T> = Suppliers$NonSerializableMemoizingSupplier<T>;
    class AbuseReportRequest {
        constructor(arg0: number, arg1: Internal.UUID_, arg2: Internal.AbuseReport_, arg3: Internal.AbuseReportRequest$ClientInfo_, arg4: Internal.AbuseReportRequest$ThirdPartyServerInfo_, arg5: Internal.AbuseReportRequest$RealmInfo_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        id: Internal.UUID;
        report: Internal.AbuseReport;
        version: number;
        clientInfo: Internal.AbuseReportRequest$ClientInfo;
        thirdPartyServerInfo: Internal.AbuseReportRequest$ThirdPartyServerInfo;
        realmInfo: Internal.AbuseReportRequest$RealmInfo;
    }
    type AbuseReportRequest_ = AbuseReportRequest;
    class AudioFormat {
        constructor(arg0: Internal.AudioFormat$Encoding_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean)
        constructor(arg0: Internal.AudioFormat$Encoding_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Map_<string, any>)
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
        matches(arg0: Internal.AudioFormat_): boolean;
        getClass(): typeof any;
        properties(): Internal.Map<string, any>;
        toString(): string;
        getSampleRate(): number;
        notifyAll(): void;
        getFrameRate(): number;
        isBigEndian(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getFrameSize(): number;
        wait(): void;
        wait(arg0: number): void;
        getProperty(arg0: string): any;
        equals(arg0: any): boolean;
        getEncoding(): Internal.AudioFormat$Encoding;
        getChannels(): number;
        getSampleSizeInBits(): number;
        get class(): typeof any
        get sampleRate(): number
        get frameRate(): number
        get bigEndian(): boolean
        get frameSize(): number
        get encoding(): Internal.AudioFormat$Encoding
        get channels(): number
        get sampleSizeInBits(): number
    }
    type AudioFormat_ = AudioFormat;
    class FluidType {
        constructor(arg0: any_)
        canSwim(arg0: Internal.Entity_): boolean;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getRarity(): Internal.Rarity;
        getDescriptionId(): string;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getDescription(): Internal.Component;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getViscosity(): number;
        getClass(): typeof any;
        isVanilla(): boolean;
        motionScale(arg0: Internal.Entity_): number;
        getRenderPropertiesInternal(): any;
        isAir(): boolean;
        getLightLevel(arg0: Internal.FluidStack_): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidStack_): number;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        toString(): string;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        canHydrate(arg0: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getDescription(arg0: Internal.FluidStack_): Internal.Component;
        getViscosity(arg0: Internal.FluidStack_): number;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get rarity(): Internal.Rarity
        get descriptionId(): string
        get temperature(): number
        get description(): Internal.Component
        get viscosity(): number
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
        static readonly SIZE: net.minecraftforge.common.util.Lazy<number>;
        static readonly BUCKET_VOLUME: (1000) & (number);
    }
    type FluidType_ = FluidType | Special.FluidType;
    class PlayerInteractEvent$RightClickItem extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.InteractionHand_)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getPos(): BlockPos;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        getHand(): Internal.InteractionHand;
        getFace(): Internal.Direction;
        getResult(): Internal.Event$Result;
        toString(): string;
        getCancellationResult(): Internal.InteractionResult;
        notifyAll(): void;
        getSide(): Internal.LogicalSide;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        getEntity(): Internal.Entity;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        setCancellationResult(arg0: Internal.InteractionResult_): void;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get level(): Internal.Level
        get pos(): BlockPos
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get hand(): Internal.InteractionHand
        get face(): Internal.Direction
        get result(): Internal.Event$Result
        get cancellationResult(): Internal.InteractionResult
        get side(): Internal.LogicalSide
        set result(arg0: Internal.Event$Result_)
        get entity(): Internal.Entity
        get phase(): Internal.EventPriority
        set cancellationResult(arg0: Internal.InteractionResult_)
        get itemStack(): Internal.ItemStack
    }
    type PlayerInteractEvent$RightClickItem_ = PlayerInteractEvent$RightClickItem;
    class SoulSpeedEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): Internal.Component;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        getRarity(): Internal.Enchantment$Rarity;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        getDescriptionId(): string;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getMinLevel(): number;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        isAllowedOnBooks(): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type SoulSpeedEnchantment_ = SoulSpeedEnchantment;
    interface Double2ByteFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleToIntFunction {
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Double2LongFunction;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Double2DoubleFunction;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Double2IntFunction;
        remove(arg0: number): number;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Double2ObjectFunction<T>;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Double2ReferenceFunction<T>;
        composeInt(arg0: Internal.Int2DoubleFunction_): Internal.Int2ByteFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        composeLong(arg0: Internal.Long2DoubleFunction_): Internal.Long2ByteFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        defaultReturnValue(): number;
        "remove(double)"(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        getOrDefault(arg0: number, arg1: number): number;
        apply(arg0: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeByte(arg0: Internal.Byte2DoubleFunction_): Internal.Byte2ByteFunction;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        identity<T>(): Internal.Function<T, T>;
        abstract "get(double)"(arg0: number): number;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Double2FloatFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Byte)"(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "containsKey(double)"(arg0: number): boolean;
        composeChar(arg0: Internal.Char2DoubleFunction_): Internal.Char2ByteFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        "put(java.lang.Double,java.lang.Byte)"(arg0: number, arg1: number): number;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Double2ShortFunction;
        composeObject<T>(arg0: Internal.Object2DoubleFunction_<T>): Internal.Object2ByteFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "put(double,byte)"(arg0: number, arg1: number): number;
        composeShort(arg0: Internal.Short2DoubleFunction_): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2DoubleFunction_<T>): Internal.Reference2ByteFunction<T>;
        "getOrDefault(double,byte)"(arg0: number, arg1: number): number;
        abstract get(arg0: number): number;
        size(): number;
        clear(): void;
        composeFloat(arg0: Internal.Float2DoubleFunction_): Internal.Float2ByteFunction;
        applyAsInt(arg0: number): number;
        composeDouble(arg0: Internal.Double2DoubleFunction_): this;
    }
    type Double2ByteFunction_ = Double2ByteFunction;
    class ServerStatusPing extends Internal.Record {
        constructor()
        constructor(channels: Internal.Map_<ResourceLocation, Internal.ServerStatusPing$ChannelData>, mods: Internal.Map_<string, string>, fmlNetworkVer: number, truncated: boolean)
        getClass(): typeof any;
        mods(): Internal.Map<string, string>;
        toString(): string;
        fmlNetworkVer(): number;
        channels(): Internal.Map<ResourceLocation, Internal.ServerStatusPing$ChannelData>;
        notifyAll(): void;
        getRemoteModData(): Internal.Map<string, string>;
        getRemoteChannels(): Internal.Map<ResourceLocation, Internal.ServerStatusPing$ChannelData>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getFMLNetworkVersion(): number;
        wait(): void;
        isTruncated(): boolean;
        wait(arg0: number): void;
        truncated(): boolean;
        equals(arg0: any): boolean;
        toBuf(): Internal.ByteBuf;
        get class(): typeof any
        get remoteModData(): Internal.Map<string, string>
        get remoteChannels(): Internal.Map<ResourceLocation, Internal.ServerStatusPing$ChannelData>
        get FMLNetworkVersion(): number
        get truncated(): boolean
        static readonly CODEC: Internal.Codec<Internal.ServerStatusPing>;
    }
    type ServerStatusPing_ = ServerStatusPing;
    class EffectProgram extends Internal.Program {
        getClass(): typeof any;
        static compileShader(arg0: Internal.Program$Type_, arg1: string, arg2: Internal.InputStream_, arg3: string): Internal.EffectProgram;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        attachToShader(arg0: Internal.Shader_): void;
        static compileShader(arg0: Internal.Program$Type_, arg1: string, arg2: Internal.InputStream_, arg3: string, arg4: Internal.GlslPreprocessor_): Internal.Program;
        wait(): void;
        close(): void;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        attachToEffect(arg0: Internal.Effect_): void;
        get class(): typeof any
        get name(): string
    }
    type EffectProgram_ = EffectProgram;
    class WorldOpenFlows {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.LevelStorageSource_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static confirmWorldCreation(arg0: Internal.Minecraft_, arg1: Internal.CreateWorldScreen_, arg2: Internal.Lifecycle_, arg3: Internal.Runnable_, arg4: boolean): void;
        recreateWorldData(arg0: Internal.LevelStorageSource$LevelStorageAccess_): com.mojang.datafixers.util.Pair<Internal.LevelSettings, Internal.WorldCreationContext>;
        hashCode(): number;
        createLevelFromExistingSettings(arg0: Internal.LevelStorageSource$LevelStorageAccess_, arg1: Internal.ReloadableServerResources_, arg2: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, arg3: Internal.WorldData_): void;
        wait(): void;
        wait(arg0: number): void;
        createFreshLevel(arg0: string, arg1: Internal.LevelSettings_, arg2: Internal.WorldOptions_, arg3: Internal.Function_<Internal.RegistryAccess, Internal.WorldDimensions>): void;
        equals(arg0: any): boolean;
        loadWorldStem(arg0: Internal.LevelStorageSource$LevelStorageAccess_, arg1: boolean): Internal.WorldStem;
        loadLevel(arg0: Internal.Screen_, arg1: string): void;
        get class(): typeof any
    }
    type WorldOpenFlows_ = WorldOpenFlows;
    interface Spliterator$OfLong extends Internal.Spliterator$OfPrimitive<number, Internal.LongConsumer, Internal.Spliterator$OfLong> {
        forEachRemaining(arg0: any): void;
        "tryAdvance(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): boolean;
        abstract "tryAdvance(java.util.function.LongConsumer)"(arg0: Internal.LongConsumer_): boolean;
        hasCharacteristics(arg0: number): boolean;
        abstract tryAdvance(arg0: Internal.LongConsumer_): boolean;
        abstract estimateSize(): number;
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        "forEachRemaining(java.util.function.LongConsumer)"(arg0: Internal.LongConsumer_): void;
        trySplit(): Internal.Spliterator$OfPrimitive<any, any, any>;
        "tryAdvance(java.lang.Object)"(arg0: any): boolean;
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        getExactSizeIfKnown(): number;
        getComparator(): Internal.Comparator<number>;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        tryAdvance(arg0: any): boolean;
        abstract characteristics(): number;
        forEachRemaining(arg0: Internal.LongConsumer_): void;
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        get exactSizeIfKnown(): number
        get comparator(): Internal.Comparator<number>
    }
    type Spliterator$OfLong_ = Spliterator$OfLong;
    class AnimationMetadataSection {
        constructor(arg0: Internal.List_<any>, arg1: number, arg2: number, arg3: number, arg4: boolean)
        getClass(): typeof any;
        toString(): string;
        isInterpolatedFrames(): boolean;
        notifyAll(): void;
        notify(): void;
        getDefaultFrameTime(): number;
        wait(arg0: number, arg1: number): void;
        calculateFrameSize(arg0: number, arg1: number): Internal.FrameSize;
        forEachFrame(arg0: Internal.AnimationMetadataSection$FrameOutput_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get interpolatedFrames(): boolean
        get defaultFrameTime(): number
        static readonly SERIALIZER: (Internal.AnimationMetadataSectionSerializer) & (Internal.AnimationMetadataSectionSerializer);
        static readonly DEFAULT_FRAME_TIME: (1) & (number);
        static readonly UNKNOWN_SIZE: (-1) & (number);
        static readonly SECTION_NAME: ("animation") & (string);
        static readonly EMPTY: Internal.AnimationMetadataSection;
    }
    type AnimationMetadataSection_ = AnimationMetadataSection;
    class RegisterCommandsEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.CommandDispatcher_<Internal.CommandSourceStack>, arg1: Internal.Commands$CommandSelection_, arg2: Internal.CommandBuildContext_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getCommandSelection(): Internal.Commands$CommandSelection;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getDispatcher(): Internal.CommandDispatcher<Internal.CommandSourceStack>;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getBuildContext(): Internal.CommandBuildContext;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get commandSelection(): Internal.Commands$CommandSelection
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get dispatcher(): Internal.CommandDispatcher<Internal.CommandSourceStack>
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get buildContext(): Internal.CommandBuildContext
    }
    type RegisterCommandsEvent_ = RegisterCommandsEvent;
    class ZoneOffsetTransitionRule implements Internal.Serializable {
        getClass(): typeof any;
        getLocalTime(): Internal.LocalTime;
        getMonth(): Internal.Month;
        toString(): string;
        getOffsetAfter(): Internal.ZoneOffset;
        notifyAll(): void;
        isMidnightEndOfDay(): boolean;
        getDayOfWeek(): Internal.DayOfWeek;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStandardOffset(): Internal.ZoneOffset;
        createTransition(arg0: number): Internal.ZoneOffsetTransition;
        getDayOfMonthIndicator(): number;
        hashCode(): number;
        getOffsetBefore(): Internal.ZoneOffset;
        static of(arg0: Internal.Month_, arg1: number, arg2: Internal.DayOfWeek_, arg3: Internal.LocalTime_, arg4: boolean, arg5: Internal.ZoneOffsetTransitionRule$TimeDefinition_, arg6: Internal.ZoneOffset_, arg7: Internal.ZoneOffset_, arg8: Internal.ZoneOffset_): Internal.ZoneOffsetTransitionRule;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getTimeDefinition(): Internal.ZoneOffsetTransitionRule$TimeDefinition;
        get class(): typeof any
        get localTime(): Internal.LocalTime
        get month(): Internal.Month
        get offsetAfter(): Internal.ZoneOffset
        get midnightEndOfDay(): boolean
        get dayOfWeek(): Internal.DayOfWeek
        get standardOffset(): Internal.ZoneOffset
        get dayOfMonthIndicator(): number
        get offsetBefore(): Internal.ZoneOffset
        get timeDefinition(): Internal.ZoneOffsetTransitionRule$TimeDefinition
    }
    type ZoneOffsetTransitionRule_ = ZoneOffsetTransitionRule;
    class OreConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.RuleTest_, arg1: Internal.BlockState_, arg2: number, arg3: number)
        constructor(arg0: Internal.RuleTest_, arg1: Internal.BlockState_, arg2: number)
        constructor(arg0: Internal.List_<Internal.OreConfiguration$TargetBlockState>, arg1: number, arg2: number)
        constructor(arg0: Internal.List_<Internal.OreConfiguration$TargetBlockState>, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        static target(arg0: Internal.RuleTest_, arg1: Internal.BlockState_): Internal.OreConfiguration$TargetBlockState;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly discardChanceOnAirExposure: number;
        readonly targetStates: Internal.List<Internal.OreConfiguration$TargetBlockState>;
        static readonly CODEC: Internal.Codec<Internal.OreConfiguration>;
        readonly size: number;
    }
    type OreConfiguration_ = OreConfiguration;
    class SerializationContext {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        serializeConditions(arg0: Internal.LootItemCondition_[]): Internal.JsonElement;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly INSTANCE: (Internal.SerializationContext) & (Internal.SerializationContext);
    }
    type SerializationContext_ = SerializationContext;
    class AmbientMoodSettings {
        constructor(arg0: Internal.Holder_<Internal.SoundEvent>, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSoundEvent(): Internal.Holder<Internal.SoundEvent>;
        getTickDelay(): number;
        hashCode(): number;
        getBlockSearchExtent(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getSoundPositionOffset(): number;
        get class(): typeof any
        get soundEvent(): Internal.Holder<Internal.SoundEvent>
        get tickDelay(): number
        get blockSearchExtent(): number
        get soundPositionOffset(): number
        static readonly CODEC: Internal.Codec<Internal.AmbientMoodSettings>;
        static readonly LEGACY_CAVE_SETTINGS: (Internal.AmbientMoodSettings) & (Internal.AmbientMoodSettings);
    }
    type AmbientMoodSettings_ = AmbientMoodSettings;
    class LevelVersion {
        getClass(): typeof any;
        levelDataVersion(): number;
        toString(): string;
        notifyAll(): void;
        lastPlayed(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        snapshot(): boolean;
        static parse(arg0: Internal.Dynamic_<any>): Internal.LevelVersion;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        minecraftVersionName(): string;
        minecraftVersion(): Internal.DataVersion;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type LevelVersion_ = LevelVersion;
    class SimpleJarMetadata extends Internal.Record implements Internal.JarMetadata {
        constructor(name: string, version: string, pkgs: Internal.Set_<string>, providers: Internal.List_<Internal.SecureJar$Provider>)
        getClass(): typeof any;
        toString(): string;
        version(): string;
        notifyAll(): void;
        descriptor(): Internal.ModuleDescriptor;
        static fromFileName(arg0: Internal.Path_, arg1: Internal.Set_<string>, arg2: Internal.List_<Internal.SecureJar$Provider>): Internal.SimpleJarMetadata;
        pkgs(): Internal.Set<string>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        name(): string;
        hashCode(): number;
        static from(arg0: Internal.SecureJar_, ...arg1: Internal.Path_[]): Internal.JarMetadata;
        wait(): void;
        wait(arg0: number): void;
        providers(): Internal.List<Internal.SecureJar$Provider>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type SimpleJarMetadata_ = SimpleJarMetadata;
    class ImmutableCollections$Set12 <E> extends Internal.ImmutableCollections$AbstractImmutableSet<E> implements Internal.Serializable {
        getClass(): typeof any;
        abstract add(arg0: E): boolean;
        parallelStream(): Internal.Stream<E>;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        toString(): string;
        forEach(arg0: Internal.Consumer_<E>): void;
        notifyAll(): void;
        toArray<T>(arg0: T[]): T[];
        "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        toArray(): any[];
        iterator(): Internal.Iterator<E>;
        hashCode(): number;
        size(): number;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(): Internal.Set<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type ImmutableCollections$Set12_<E> = ImmutableCollections$Set12<E>;
    class ThrownEnderpearl extends Internal.ThrowableItemProjectile {
        constructor(arg0: Internal.EntityType_<Internal.ThrownEnderpearl>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        "getItem()"(): Internal.ItemStack;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getRemainingFireTicks(): number;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setOwner(arg0: Internal.Entity_): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isLiving(): boolean;
        getX(): number;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        shoot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        notify(): void;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        getRotationVector(): Internal.Vec2;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        self(): Internal.Entity;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        shootFromRotation(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getServer(): Internal.MinecraftServer;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        ejectPassengers(): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        setItem(arg0: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: DamageSource_): void;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        getOwner(): Internal.Entity;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        isSwimming(): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setSprinting(arg0: boolean): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        discard(): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getEffectSource(): Internal.Entity;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get "item()"(): Internal.ItemStack
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get remainingFireTicks(): number
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: Internal.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set owner(arg0: Internal.Entity_)
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get x(): number
        get glowing(): boolean
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        get underWater(): boolean
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        set item(arg0: Internal.ItemStack_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get commandSenderWorld(): Internal.Level
        get owner(): Internal.Entity
        get customName(): Internal.Component
        get class(): typeof any
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get facing(): Internal.Direction
        get swimming(): boolean
        get boundingBoxForCulling(): Internal.AABB
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get stepHeight(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        get randomY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get effectSource(): Internal.Entity
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get passenger(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
    }
    type ThrownEnderpearl_ = ThrownEnderpearl;
    class Parrot$Variant extends Internal.Enum<Internal.Parrot$Variant> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        "compareTo(net.minecraft.world.entity.animal.Parrot$Variant)"(arg0: Internal.Parrot$Variant_): number;
        getId(): number;
        getDeclaringClass(): typeof Internal.Parrot$Variant;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Parrot$Variant>>;
        name(): string;
        hashCode(): number;
        static byId(arg0: number): Internal.Parrot$Variant;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.Parrot$Variant[];
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        compareTo(arg0: Internal.Parrot$Variant_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.Parrot$Variant;
        get class(): typeof any
        get serializedName(): string
        get id(): number
        get declaringClass(): typeof Internal.Parrot$Variant
        static readonly GRAY: (Internal.Parrot$Variant) & (Internal.Parrot$Variant);
        static readonly BLUE: (Internal.Parrot$Variant) & (Internal.Parrot$Variant);
        static readonly CODEC: Internal.Codec<Internal.Parrot$Variant>;
        static readonly RED_BLUE: (Internal.Parrot$Variant) & (Internal.Parrot$Variant);
        static readonly YELLOW_BLUE: (Internal.Parrot$Variant) & (Internal.Parrot$Variant);
        static readonly GREEN: (Internal.Parrot$Variant) & (Internal.Parrot$Variant);
    }
    type Parrot$Variant_ = "yellow_blue" | Parrot$Variant | "gray" | "blue" | "red_blue" | "green";
    class ItemDestroyedEventJS extends Internal.PlayerEventJS {
        constructor(e: Internal.PlayerDestroyItemEvent_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        getEntity(): Internal.Entity;
        wait(): void;
        getHand(): Internal.InteractionHand;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        getPlayer(): Internal.Player;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        getServer(): Internal.MinecraftServer;
        get class(): typeof any
        get item(): Internal.ItemStack
        get level(): Internal.Level
        get entity(): Internal.Entity
        get hand(): Internal.InteractionHand
        get player(): Internal.Player
        get server(): Internal.MinecraftServer
    }
    type ItemDestroyedEventJS_ = ItemDestroyedEventJS;
    interface ContainerEntity extends Internal.Container, Internal.MenuProvider {
        stopOpen(arg0: Internal.Player_): void;
        tryClear(arg0: any): void;
        abstract setLootTableSeed(arg0: number): void;
        isChestVehicleEmpty(): boolean;
        addChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        abstract isRemoved(): boolean;
        setChanged(): void;
        isChestVehicleStillValid(arg0: Internal.Player_): boolean;
        abstract position(): Vec3d;
        abstract getContainerSize(): number;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        interactWithContainerVehicle(arg0: Internal.Player_): Internal.InteractionResult;
        abstract "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        "isEmpty()"(): boolean;
        clearChestVehicleContent(): void;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        abstract setLootTable(arg0: ResourceLocation_): void;
        abstract clearItemStacks(): void;
        abstract getItem(arg0: number): Internal.ItemStack;
        unpackChestVehicleLootTable(arg0: Internal.Player_): void;
        getChestVehicleSlot(arg0: number): Internal.SlotAccess;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        chestVehicleDestroyed(arg0: DamageSource_, arg1: Internal.Level_, arg2: Internal.Entity_): void;
        abstract getDisplayName(): Internal.Component;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        abstract getItemStacks(): Internal.NonNullList<Internal.ItemStack>;
        abstract createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        removeChestVehicleItem(arg0: number, arg1: number): Internal.ItemStack;
        getChestVehicleItem(arg0: number): Internal.ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        readChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        abstract getLootTableSeed(): number;
        removeChestVehicleItemNoUpdate(arg0: number): Internal.ItemStack;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract getLootTable(): ResourceLocation;
        setChestVehicleItem(arg0: number, arg1: Internal.ItemStack_): void;
        abstract stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract level(): Internal.Level;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        set lootTableSeed(arg0: number)
        get chestVehicleEmpty(): boolean
        get slots(): number
        get removed(): boolean
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get "empty()"(): boolean
        set lootTable(arg0: ResourceLocation_)
        get displayName(): Internal.Component
        get empty(): boolean
        get itemStacks(): Internal.NonNullList<Internal.ItemStack>
        get height(): number
        get lootTableSeed(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get lootTable(): ResourceLocation
        get mutable(): boolean
    }
    type ContainerEntity_ = ContainerEntity;
    class BlockIgnoreProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.List_<Internal.Block>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        processEntity(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.StructureTemplate$StructureEntityInfo_, arg3: Internal.StructureTemplate$StructureEntityInfo_, arg4: Internal.StructurePlaceSettings_, arg5: Internal.StructureTemplate_): Internal.StructureTemplate$StructureEntityInfo;
        wait(): void;
        process(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_, arg6: Internal.StructureTemplate_): Internal.StructureTemplate$StructureBlockInfo;
        wait(arg0: number): void;
        processBlock(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_): Internal.StructureTemplate$StructureBlockInfo;
        finalizeProcessing(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg5: Internal.StructurePlaceSettings_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly AIR: (Internal.BlockIgnoreProcessor) & (Internal.BlockIgnoreProcessor);
        static readonly STRUCTURE_BLOCK: (Internal.BlockIgnoreProcessor) & (Internal.BlockIgnoreProcessor);
        static readonly CODEC: Internal.Codec<Internal.BlockIgnoreProcessor>;
        static readonly STRUCTURE_AND_AIR: (Internal.BlockIgnoreProcessor) & (Internal.BlockIgnoreProcessor);
    }
    type BlockIgnoreProcessor_ = BlockIgnoreProcessor;
    class ForgeFaceData extends Internal.Record {
        constructor(color: number, blockLight: number, skyLight: number, ambientOcclusion: boolean, calculateNormals: boolean)
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
        getClass(): typeof any;
        static read(arg0: Internal.JsonElement_, arg1: Internal.ForgeFaceData_): Internal.ForgeFaceData;
        ambientOcclusion(): boolean;
        toString(): string;
        notifyAll(): void;
        calculateNormals(): boolean;
        skyLight(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        color(): number;
        wait(): void;
        wait(arg0: number): void;
        blockLight(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ForgeFaceData>;
        static readonly DEFAULT: (Internal.ForgeFaceData) & (Internal.ForgeFaceData);
        static readonly COLOR: Internal.Codec<number>;
    }
    type ForgeFaceData_ = ForgeFaceData;
    class ServerboundKeepAlivePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getId(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get id(): number
    }
    type ServerboundKeepAlivePacket_ = ServerboundKeepAlivePacket;
    class MapDecoration {
        constructor(arg0: Internal.MapDecoration$Type_, arg1: number, arg2: number, arg3: number, arg4: Internal.Component_)
        getClass(): typeof any;
        getRot(): number;
        getName(): Internal.Component;
        toString(): string;
        renderOnFrame(): boolean;
        notifyAll(): void;
        notify(): void;
        getType(): Internal.MapDecoration$Type;
        wait(arg0: number, arg1: number): void;
        getX(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getImage(): number;
        equals(arg0: any): boolean;
        render(arg0: number): boolean;
        getY(): number;
        get class(): typeof any
        get rot(): number
        get name(): Internal.Component
        get type(): Internal.MapDecoration$Type
        get x(): number
        get image(): number
        get y(): number
    }
    type MapDecoration_ = MapDecoration;
    class PooledByteBufAllocator extends Internal.AbstractByteBufAllocator implements Internal.ByteBufAllocatorMetricProvider {
        constructor()
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
        constructor(arg0: boolean)
        compositeDirectBuffer(arg0: number): Internal.CompositeByteBuf;
        compositeHeapBuffer(arg0: number): Internal.CompositeByteBuf;
        compositeBuffer(): Internal.CompositeByteBuf;
        ioBuffer(): Internal.ByteBuf;
        static defaultNumDirectArena(): number;
        notify(): void;
        /**
         * @deprecated
        */
        freeThreadLocalCache(): void;
        /**
         * @deprecated
        */
        tinyCacheSize(): number;
        static defaultSmallCacheSize(): number;
        /**
         * @deprecated
        */
        normalCacheSize(): number;
        static defaultPageSize(): number;
        /**
         * @deprecated
        */
        directArenas(): Internal.List<Internal.PoolArenaMetric>;
        directBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        /**
         * @deprecated
        */
        numHeapArenas(): number;
        heapBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        /**
         * @deprecated
        */
        smallCacheSize(): number;
        /**
         * @deprecated
        */
        static defaultTinyCacheSize(): number;
        ioBuffer(arg0: number): Internal.ByteBuf;
        /**
         * @deprecated
        */
        heapArenas(): Internal.List<Internal.PoolArenaMetric>;
        compositeBuffer(arg0: number): Internal.CompositeByteBuf;
        static defaultPreferDirect(): boolean;
        /**
         * @deprecated
        */
        chunkSize(): number;
        directBuffer(arg0: number): Internal.ByteBuf;
        trimCurrentThreadCache(): boolean;
        buffer(arg0: number, arg1: number): Internal.ByteBuf;
        ioBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        wait(): void;
        /**
         * @deprecated
        */
        numThreadLocalCaches(): number;
        dumpStats(): string;
        buffer(arg0: number): Internal.ByteBuf;
        getClass(): typeof any;
        pinnedDirectMemory(): number;
        /**
         * @deprecated
        */
        numDirectArenas(): number;
        heapBuffer(arg0: number): Internal.ByteBuf;
        wait(arg0: number, arg1: number): void;
        calculateNewCapacity(arg0: number, arg1: number): number;
        static defaultUseCacheForAllThreads(): boolean;
        static defaultMaxOrder(): number;
        /**
         * @deprecated
        */
        hasThreadLocalCache(): boolean;
        buffer(): Internal.ByteBuf;
        toString(): string;
        compositeDirectBuffer(): Internal.CompositeByteBuf;
        notifyAll(): void;
        heapBuffer(): Internal.ByteBuf;
        static isDirectMemoryCacheAlignmentSupported(): boolean;
        directBuffer(): Internal.ByteBuf;
        static defaultNumHeapArena(): number;
        isDirectBufferPooled(): boolean;
        hashCode(): number;
        pinnedHeapMemory(): number;
        static defaultNormalCacheSize(): number;
        metric(): Internal.PooledByteBufAllocatorMetric;
        wait(arg0: number): void;
        compositeHeapBuffer(): Internal.CompositeByteBuf;
        equals(arg0: any): boolean;
        get class(): typeof any
        get directMemoryCacheAlignmentSupported(): boolean
        get directBufferPooled(): boolean
        static readonly DEFAULT: (Internal.PooledByteBufAllocator) & (Internal.PooledByteBufAllocator);
    }
    type PooledByteBufAllocator_ = PooledByteBufAllocator;
    class DimensionDataStorage {
        constructor(arg0: Internal.File_, arg1: Internal.DataFixer_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        set(arg0: string, arg1: Internal.SavedData_): void;
        readTagFromDisk(arg0: string, arg1: number): Internal.CompoundTag;
        notify(): void;
        save(): void;
        wait(arg0: number, arg1: number): void;
        computeIfAbsent<T extends Internal.SavedData>(arg0: Internal.Function_<Internal.CompoundTag, T>, arg1: Internal.Supplier_<T>, arg2: string): T;
        hashCode(): number;
        get<T extends Internal.SavedData>(arg0: Internal.Function_<Internal.CompoundTag, T>, arg1: string): T;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type DimensionDataStorage_ = DimensionDataStorage;
    interface Int2LongFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntToLongFunction {
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2LongFunction;
        "getOrDefault(int,long)"(arg0: number, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        containsKey(arg0: number): boolean;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Int2DoubleFunction;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Int2ShortFunction;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Int2CharFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        "containsKey(int)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        applyAsLong(arg0: number): number;
        abstract "get(int)"(arg0: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Long)"(arg0: any, arg1: number): number;
        abstract get(arg0: number): number;
        "remove(int)"(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2LongFunction<T>;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2LongFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Integer,java.lang.Long)"(arg0: number, arg1: number): number;
        "put(int,long)"(arg0: number, arg1: number): number;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2LongFunction;
        remove(arg0: number): number;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2LongFunction;
        defaultReturnValue(): number;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Int2IntFunction;
        size(): number;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2LongFunction;
        clear(): void;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2LongFunction;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Int2ByteFunction;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2LongFunction;
    }
    type Int2LongFunction_ = Int2LongFunction;
    class RecipesEventJS extends Internal.EventJS {
        constructor()
        getClass(): typeof any;
        static "runInParallel(java.util.concurrent.Callable)"<T>(callable: Internal.Callable_<T>): T;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        findRecipes(filter: Internal.RecipeFilter_): Internal.Collection<Internal.RecipeJS>;
        custom(json: Internal.JsonObject_): Internal.RecipeJS;
        printAllTypes(): void;
        static runInParallel<T>(callable: Internal.Callable_<T>): T;
        printExamples(type: string): void;
        stage(filter: Internal.RecipeFilter_, stage: string): void;
        printTypes(): void;
        notify(): void;
        remove(filter: Internal.RecipeFilter_): void;
        wait(arg0: number, arg1: number): void;
        forEachRecipe(filter: Internal.RecipeFilter_, consumer: Internal.Consumer_<Internal.RecipeJS>): void;
        countRecipes(filter: Internal.RecipeFilter_): number;
        replaceInput(filter: Internal.RecipeFilter_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): void;
        custom(o: {type: Special.RecipeSerializer}): Internal.RecipeJS;
        static runInParallel(runnable: Internal.Runnable_): void;
        toString(): string;
        customFilter(filter: Internal.Predicate_<Internal.RecipeKJS>): Internal.RecipeFilter;
        notifyAll(): void;
        addRecipe(r: Internal.RecipeJS_, json: boolean): Internal.RecipeJS;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        getRecipes(): Special.DocumentedRecipes;
        replaceOutput(filter: Internal.RecipeFilter_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): void;
        takeId(recipe: Internal.RecipeJS_, prefix: string, ids: string): ResourceLocation;
        static "runInParallel(java.lang.Runnable)"(runnable: Internal.Runnable_): void;
        findRecipeIds(filter: Internal.RecipeFilter_): Internal.Collection<ResourceLocation>;
        getRecipes(): Special.DocumentedRecipes;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        getRecipeFunction(id: string): Internal.RecipeTypeFunction;
        recipeStream(filter: Internal.RecipeFilter_): Internal.Stream<Internal.RecipeJS>;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        containsRecipe(filter: Internal.RecipeFilter_): boolean;
        setItemErrors(b: boolean): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        get class(): typeof any
        get recipes(): Special.DocumentedRecipes
        get recipes(): Special.DocumentedRecipes
        set itemErrors(b: boolean)
        readonly smithing: Internal.RecipeTypeFunction;
        readonly addedRecipes: Internal.Collection<Internal.RecipeJS>;
        readonly shapeless: Internal.RecipeTypeFunction;
        readonly smithingTrim: Internal.RecipeTypeFunction;
        readonly smelting: Internal.RecipeTypeFunction;
        readonly blasting: Internal.RecipeTypeFunction;
        readonly stonecutting: Internal.RecipeTypeFunction;
        readonly smoking: Internal.RecipeTypeFunction;
        readonly campfireCooking: Internal.RecipeTypeFunction;
        static readonly SKIP_ERROR: (Internal.Pattern) & (Internal.Pattern);
        readonly failedCount: Internal.AtomicInteger;
        readonly takenIds: Internal.Map<ResourceLocation, Internal.RecipeJS>;
        readonly originalRecipes: Internal.Map<ResourceLocation, Internal.RecipeJS>;
        readonly shaped: Internal.RecipeTypeFunction;
    }
    type RecipesEventJS_ = RecipesEventJS;
    class DynamicCommandExceptionType implements Internal.CommandExceptionType {
        constructor(arg0: Internal.Function_<any, com.mojang.brigadier.Message>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        createWithContext(arg0: Internal.ImmutableStringReader_, arg1: any): Internal.CommandSyntaxException;
        create(arg0: any): Internal.CommandSyntaxException;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type DynamicCommandExceptionType_ = DynamicCommandExceptionType;
    interface MenuRegistry$ScreenFactory <H extends Internal.AbstractContainerMenu, S extends Internal.Screen & Internal.MenuAccess<H>> {
        abstract create(arg0: H, arg1: Internal.Inventory_, arg2: Internal.Component_): S;
        (arg0: H, arg1: Internal.Inventory, arg2: Internal.Component): S;
    }
    type MenuRegistry$ScreenFactory_<H extends Internal.AbstractContainerMenu, S extends Internal.Screen & Internal.MenuAccess<H>> = ((arg0: H, arg1: Internal.Inventory, arg2: Internal.Component)=> S) | MenuRegistry$ScreenFactory<H, S>;
    abstract class ClientboundMoveEntityPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getxRot(): number;
        notifyAll(): void;
        getyRot(): number;
        notify(): void;
        getEntity(arg0: Internal.Level_): Internal.Entity;
        hasPosition(): boolean;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getXa(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZa(): number;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getYa(): number;
        hasRotation(): boolean;
        isOnGround(): boolean;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get xRot(): number
        get yRot(): number
        get skippable(): boolean
        get xa(): number
        get za(): number
        get ya(): number
        get onGround(): boolean
    }
    type ClientboundMoveEntityPacket_ = ClientboundMoveEntityPacket;
    interface BlockStateKJS {
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        set requiresTool(v: boolean)
        set destroySpeed(v: number)
        set lightEmission(v: number)
    }
    type BlockStateKJS_ = BlockStateKJS;
    class BlockEvent$BreakEvent extends Internal.BlockEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getPos(): BlockPos;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getExpToDrop(): number;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPlayer(): Internal.Player;
        getPhase(): Internal.EventPriority;
        setExpToDrop(arg0: number): void;
        equals(arg0: any): boolean;
        getState(): Internal.BlockState;
        getLevel(): Internal.LevelAccessor;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get pos(): BlockPos
        get cancelable(): boolean
        get expToDrop(): number
        get listenerList(): Internal.ListenerList
        get player(): Internal.Player
        get phase(): Internal.EventPriority
        set expToDrop(arg0: number)
        get state(): Internal.BlockState
        get level(): Internal.LevelAccessor
    }
    type BlockEvent$BreakEvent_ = BlockEvent$BreakEvent;
    class Heightmap$Types extends Internal.Enum<Internal.Heightmap$Types> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        notify(): void;
        sendToClient(): boolean;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializationKey(): string;
        compareTo(arg0: Internal.Heightmap$Types_): number;
        "compareTo(net.minecraft.world.level.levelgen.Heightmap$Types)"(arg0: Internal.Heightmap$Types_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getDeclaringClass(): typeof Internal.Heightmap$Types;
        toString(): string;
        keepAfterWorldgen(): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Heightmap$Types>>;
        notifyAll(): void;
        static values(): Internal.Heightmap$Types[];
        name(): string;
        isOpaque(): Internal.Predicate<Internal.BlockState>;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.Heightmap$Types;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get serializationKey(): string
        get declaringClass(): typeof Internal.Heightmap$Types
        static readonly OCEAN_FLOOR: (Internal.Heightmap$Types) & (Internal.Heightmap$Types);
        static readonly MOTION_BLOCKING_NO_LEAVES: (Internal.Heightmap$Types) & (Internal.Heightmap$Types);
        static readonly CODEC: Internal.Codec<Internal.Heightmap$Types>;
        static readonly MOTION_BLOCKING: (Internal.Heightmap$Types) & (Internal.Heightmap$Types);
        static readonly WORLD_SURFACE: (Internal.Heightmap$Types) & (Internal.Heightmap$Types);
        static readonly WORLD_SURFACE_WG: (Internal.Heightmap$Types) & (Internal.Heightmap$Types);
        static readonly OCEAN_FLOOR_WG: (Internal.Heightmap$Types) & (Internal.Heightmap$Types);
    }
    type Heightmap$Types_ = "motion_blocking_no_leaves" | "ocean_floor" | "motion_blocking" | "world_surface" | Heightmap$Types | "world_surface_wg" | "ocean_floor_wg";
    interface NbtProvider {
        abstract getType(): Internal.LootNbtProviderType;
        abstract getReferencedContextParams(): Internal.Set<Internal.LootContextParam<any>>;
        abstract get(arg0: Internal.LootContext_): Internal.Tag;
        get type(): Internal.LootNbtProviderType
        get referencedContextParams(): Internal.Set<Internal.LootContextParam<any>>
    }
    type NbtProvider_ = NbtProvider;
    interface ServerFunctionManager$TraceCallbacks {
        abstract onCommand(arg0: number, arg1: string): void;
        abstract onReturn(arg0: number, arg1: string, arg2: number): void;
        abstract onCall(arg0: number, arg1: ResourceLocation_, arg2: number): void;
        abstract onError(arg0: number, arg1: string): void;
    }
    type ServerFunctionManager$TraceCallbacks_ = ServerFunctionManager$TraceCallbacks;
    interface TickablePacketListener extends Internal.PacketListener {
        abstract isAcceptingMessages(): boolean;
        abstract onDisconnect(arg0: Internal.Component_): void;
        abstract tick(): void;
        shouldPropagateHandlingExceptions(): boolean;
        get acceptingMessages(): boolean
    }
    type TickablePacketListener_ = TickablePacketListener;
    interface DensityFunctions$PureTransformer extends Internal.DensityFunction {
        halfNegative(): Internal.DensityFunction;
        abs(): Internal.DensityFunction;
        abstract maxValue(): number;
        abstract codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        abstract transform(arg0: number): number;
        square(): Internal.DensityFunction;
        abstract mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        abstract input(): Internal.DensityFunction;
        abstract minValue(): number;
    }
    type DensityFunctions$PureTransformer_ = DensityFunctions$PureTransformer;
    class LevelChunk extends Internal.ChunkAccess implements Internal.ICapabilityProviderImpl<Internal.LevelChunk> {
        constructor(arg0: Internal.Level_, arg1: Internal.ChunkPos_)
        constructor(arg0: Internal.ServerLevel_, arg1: Internal.ProtoChunk_, arg2: any_)
        constructor(arg0: Internal.Level_, arg1: Internal.ChunkPos_, arg2: Internal.UpgradeData_, arg3: Internal.LevelChunkTicks_<Internal.Block>, arg4: Internal.LevelChunkTicks_<Internal.Fluid>, arg5: number, arg6: Internal.LevelChunkSection_[], arg7: any_, arg8: Internal.BlendingData_)
        clearAllBlockEntities(): void;
        getHighestFilledSectionIndex(): number;
        findBlocks(arg0: Internal.BiPredicate_<Internal.BlockState, BlockPos>, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>): void;
        getMaxSection(): number;
        isUnsaved(): boolean;
        setLightCorrect(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        getReferencesForStructure(arg0: Internal.Structure_): Internal.LongSet;
        setLoaded(arg0: boolean): void;
        getSectionYFromSectionIndex(arg0: number): number;
        hasAnyStructureReferences(): boolean;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        setBlockEntity(arg0: Internal.BlockEntity_): void;
        getFluidState(arg0: number, arg1: number, arg2: number): Internal.FluidState;
        getHighestGeneratedStatus(): Internal.ChunkStatus;
        setInhabitedTime(arg0: number): void;
        getStartForStructure(arg0: Internal.Structure_): Internal.StructureStart;
        initializeLightSources(): void;
        "getBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.entity.BlockEntityType)"<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getPostProcessing(): Internal.ShortList[];
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        replaceWithPacketData(arg0: Internal.FriendlyByteBuf_, arg1: Internal.CompoundTag_, arg2: Internal.Consumer_<Internal.ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        fillBiomesFromNoise(arg0: Internal.BiomeResolver_, arg1: Internal.Climate$Sampler_): void;
        getMinBuildHeight(): number;
        incrementInhabitedTime(arg0: number): void;
        getBlendingData(): Internal.BlendingData;
        getClass(): typeof any;
        getSection(arg0: number): Internal.LevelChunkSection;
        getSectionIndex(arg0: number): number;
        getTicksForSerialization(): Internal.ChunkAccess$TicksToSave;
        getMaxBuildHeight(): number;
        setBlendingData(arg0: Internal.BlendingData_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.LevelChunk>): boolean;
        setBlockEntityNbt(arg0: Internal.CompoundTag_): void;
        "isOutsideBuildHeight(int)"(arg0: number): boolean;
        getSkyLightSources(): Internal.ChunkSkyLightSources;
        runPostLoad(): void;
        postProcessGeneration(): void;
        getHeight(): number;
        findBlocks(arg0: Internal.Predicate_<Internal.BlockState>, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>): void;
        /**
         * @deprecated
        */
        readCapsFromNBT(arg0: Internal.CompoundTag_): void;
        getFullStatus(): Internal.FullChunkStatus;
        findBlockLightSources(arg0: Internal.BiConsumer_<BlockPos, Internal.BlockState>): void;
        toString(): string;
        getListenerRegistry(arg0: number): Internal.GameEventListenerRegistry;
        notifyAll(): void;
        "isOutsideBuildHeight(net.minecraft.core.BlockPos)"(arg0: BlockPos_): boolean;
        getInhabitedTime(): number;
        /**
         * @deprecated
        */
        addEntity(arg0: Internal.Entity_): void;
        wait(arg0: number): void;
        getStatus(): Internal.ChunkStatus;
        getBlockEntities(): Internal.Map<BlockPos, Internal.BlockEntity>;
        reviveCaps(): void;
        setAllStarts(arg0: Internal.Map_<Internal.Structure, Internal.StructureStart>): void;
        getBlockEntityNbt(arg0: BlockPos_): Internal.CompoundTag;
        /**
         * @deprecated
        */
        carverBiome(arg0: Internal.Supplier_<Internal.BiomeGenerationSettings>): Internal.BiomeGenerationSettings;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.LevelChunk>): boolean;
        static getOrCreateOffsetList(arg0: Internal.ShortList_[], arg1: number): Internal.ShortList;
        getMinSection(): number;
        getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        notify(): void;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getOrCreateHeightmapUnprimed(arg0: Internal.Heightmap$Types_): Internal.Heightmap;
        addReferenceForStructure(arg0: Internal.Structure_, arg1: number): void;
        getBelowZeroRetrogen(): Internal.BelowZeroRetrogen;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getHeightAccessorForGeneration(): Internal.LevelHeightAccessor;
        invalidateCaps(): void;
        addAndRegisterBlockEntity(arg0: Internal.BlockEntity_): void;
        setBlockState(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: boolean): Internal.BlockState;
        getBlockEntityNbtForSaving(arg0: BlockPos_): Internal.CompoundTag;
        removeBlockEntity(arg0: BlockPos_): void;
        getHeightmaps(): Internal.Collection<Internal.Map$Entry<Internal.Heightmap$Types, Internal.Heightmap>>;
        unregisterTickContainerFromLevel(arg0: Internal.ServerLevel_): void;
        getPos(): Internal.ChunkPos;
        getUpgradeData(): Internal.UpgradeData;
        getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getSectionsCount(): number;
        wait(): void;
        getSectionIndexFromSectionY(arg0: number): number;
        markPosForPostprocessing(arg0: BlockPos_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        addPackedPostProcess(arg0: number, arg1: number): void;
        getBlockEntity(arg0: BlockPos_, arg1: Internal.LevelChunk$EntityCreationType_): Internal.BlockEntity;
        isEmpty(): boolean;
        setUnsaved(arg0: boolean): void;
        wait(arg0: number, arg1: number): void;
        "findBlocks(java.util.function.BiPredicate,java.util.function.BiConsumer)"(arg0: Internal.BiPredicate_<Internal.BlockState, BlockPos>, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>): void;
        getLevel(): Internal.Level;
        setHeightmap(arg0: Internal.Heightmap$Types_, arg1: number[]): void;
        getOrCreateNoiseChunk(arg0: Internal.Function_<Internal.ChunkAccess, Internal.NoiseChunk>): Internal.NoiseChunk;
        "findBlocks(java.util.function.Predicate,java.util.function.BiConsumer)"(arg0: Internal.Predicate_<Internal.BlockState>, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>): void;
        getAllReferences(): Internal.Map<Internal.Structure, Internal.LongSet>;
        unpackTicks(arg0: number): void;
        isLightCorrect(): boolean;
        getAllStarts(): Internal.Map<Internal.Structure, Internal.StructureStart>;
        getBlockEntitiesPos(): Internal.Set<BlockPos>;
        getFluidTicks(): Internal.TickContainerAccess<Internal.Fluid>;
        "getBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.chunk.LevelChunk$EntityCreationType)"(arg0: BlockPos_, arg1: Internal.LevelChunk$EntityCreationType_): Internal.BlockEntity;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getModelDataManager(): Internal.ModelDataManager;
        getBlockTicks(): Internal.TickContainerAccess<Internal.Block>;
        /**
         * @deprecated
        */
        writeCapsToNBT(): Internal.CompoundTag;
        setAllReferences(arg0: Internal.Map_<Internal.Structure, Internal.LongSet>): void;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        getFluidState(arg0: BlockPos_): Internal.FluidState;
        hasPrimedHeightmap(arg0: Internal.Heightmap$Types_): boolean;
        getWorldForge(): Internal.Level;
        setFullStatus(arg0: Internal.Supplier_<Internal.FullChunkStatus>): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getHighestSectionPosition(): number;
        isOldNoiseGeneration(): boolean;
        registerTickContainerInLevel(arg0: Internal.ServerLevel_): void;
        hashCode(): number;
        isYSpaceEmpty(arg0: number, arg1: number): boolean;
        isUpgrading(): boolean;
        replaceBiomes(arg0: Internal.FriendlyByteBuf_): void;
        getSections(): Internal.LevelChunkSection[];
        setStartForStructure(arg0: Internal.Structure_, arg1: Internal.StructureStart_): void;
        getMaxLightLevel(): number;
        equals(arg0: any): boolean;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get highestFilledSectionIndex(): number
        get maxSection(): number
        get unsaved(): boolean
        set lightCorrect(arg0: boolean)
        set loaded(arg0: boolean)
        set blockEntity(arg0: Internal.BlockEntity_)
        get highestGeneratedStatus(): Internal.ChunkStatus
        set inhabitedTime(arg0: number)
        get postProcessing(): Internal.ShortList[]
        get minBuildHeight(): number
        get blendingData(): Internal.BlendingData
        get class(): typeof any
        get ticksForSerialization(): Internal.ChunkAccess$TicksToSave
        get maxBuildHeight(): number
        set blendingData(arg0: Internal.BlendingData_)
        set blockEntityNbt(arg0: Internal.CompoundTag_)
        get skyLightSources(): Internal.ChunkSkyLightSources
        get height(): number
        get fullStatus(): Internal.FullChunkStatus
        get inhabitedTime(): number
        get status(): Internal.ChunkStatus
        get blockEntities(): Internal.Map<BlockPos, Internal.BlockEntity>
        set allStarts(arg0: Internal.Map_<Internal.Structure, Internal.StructureStart>)
        get minSection(): number
        get belowZeroRetrogen(): Internal.BelowZeroRetrogen
        get heightAccessorForGeneration(): Internal.LevelHeightAccessor
        get heightmaps(): Internal.Collection<Internal.Map$Entry<Internal.Heightmap$Types, Internal.Heightmap>>
        get pos(): Internal.ChunkPos
        get upgradeData(): Internal.UpgradeData
        get sectionsCount(): number
        get empty(): boolean
        set unsaved(arg0: boolean)
        get level(): Internal.Level
        get allReferences(): Internal.Map<Internal.Structure, Internal.LongSet>
        get lightCorrect(): boolean
        get allStarts(): Internal.Map<Internal.Structure, Internal.StructureStart>
        get blockEntitiesPos(): Internal.Set<BlockPos>
        get fluidTicks(): Internal.TickContainerAccess<Internal.Fluid>
        get modelDataManager(): Internal.ModelDataManager
        get blockTicks(): Internal.TickContainerAccess<Internal.Block>
        set allReferences(arg0: Internal.Map_<Internal.Structure, Internal.LongSet>)
        get worldForge(): Internal.Level
        set fullStatus(arg0: Internal.Supplier_<Internal.FullChunkStatus>)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get highestSectionPosition(): number
        get oldNoiseGeneration(): boolean
        get upgrading(): boolean
        get sections(): Internal.LevelChunkSection[]
        get maxLightLevel(): number
    }
    type LevelChunk_ = LevelChunk;
    class Direction$Plane extends Internal.Enum<Internal.Direction$Plane> implements Internal.Predicate<Internal.Direction>, Internal.Iterable<Internal.Direction> {
        getClass(): typeof any;
        or(arg0: Internal.Predicate_<Internal.Direction>): Internal.Predicate<Internal.Direction>;
        spliterator(): Internal.Spliterator<Internal.Direction>;
        iterator(): Internal.Iterator<Internal.Direction>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        compareTo(arg0: any): number;
        test(arg0: any): boolean;
        "compareTo(net.minecraft.core.Direction$Plane)"(arg0: Internal.Direction$Plane_): number;
        "test(java.lang.Object)"(arg0: any): boolean;
        test(arg0: Internal.Direction_): boolean;
        compareTo(arg0: Internal.Direction$Plane_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        stream(): Internal.Stream<Internal.Direction>;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        toString(): string;
        and(arg0: Internal.Predicate_<Internal.Direction>): Internal.Predicate<Internal.Direction>;
        notifyAll(): void;
        getRandomAxis(arg0: Internal.RandomSource_): Internal.Direction$Axis;
        static values(): Internal.Direction$Plane[];
        name(): string;
        forEach(arg0: Internal.Consumer_<Internal.Direction>): void;
        hashCode(): number;
        getRandomDirection(arg0: Internal.RandomSource_): Internal.Direction;
        ordinal(): number;
        wait(): void;
        "test(net.minecraft.core.Direction)"(arg0: Internal.Direction_): boolean;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static valueOf(arg0: string): Internal.Direction$Plane;
        shuffledCopy(arg0: Internal.RandomSource_): Internal.List<Internal.Direction>;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Direction$Plane>>;
        negate(): Internal.Predicate<Internal.Direction>;
        getDeclaringClass(): typeof Internal.Direction$Plane;
        get class(): typeof any
        get declaringClass(): typeof Internal.Direction$Plane
        static readonly HORIZONTAL: (Internal.Direction$Plane) & (Internal.Direction$Plane);
        static readonly VERTICAL: (Internal.Direction$Plane) & (Internal.Direction$Plane);
    }
    type Direction$Plane_ = Direction$Plane | "vertical" | "horizontal";
    class User$Type extends Internal.Enum<Internal.User$Type> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.User$Type>>;
        "compareTo(net.minecraft.client.User$Type)"(arg0: Internal.User$Type_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.User$Type;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        compareTo(arg0: Internal.User$Type_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static byName(arg0: string): Internal.User$Type;
        equals(arg0: any): boolean;
        static values(): Internal.User$Type[];
        getDeclaringClass(): typeof Internal.User$Type;
        get class(): typeof any
        get name(): string
        get declaringClass(): typeof Internal.User$Type
        static readonly LEGACY: (Internal.User$Type) & (Internal.User$Type);
        static readonly MSA: (Internal.User$Type) & (Internal.User$Type);
        static readonly MOJANG: (Internal.User$Type) & (Internal.User$Type);
    }
    type User$Type_ = User$Type | "mojang" | "msa" | "legacy";
    class MutableHashedLinkedMap <K, V> implements Internal.Iterable<Internal.Map$Entry<K, V>> {
        constructor(arg0: Internal.Hash$Strategy_<K>, arg1: any_<K, V>)
        constructor()
        constructor(arg0: Internal.Hash$Strategy_<K>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        spliterator(): Internal.Spliterator<Internal.Map$Entry<K, V>>;
        hashCode(): number;
        put(arg0: K, arg1: V): V;
        wait(): void;
        putFirst(arg0: K, arg1: V): V;
        wait(arg0: number): void;
        get(arg0: K): V;
        iterator(): Internal.Iterator<Internal.Map$Entry<K, V>>;
        contains(arg0: K): boolean;
        putAfter(arg0: K, arg1: K, arg2: V): V;
        equals(arg0: any): boolean;
        putBefore(arg0: K, arg1: K, arg2: V): V;
        forEach(arg0: Internal.Consumer_<Internal.Map$Entry<K, V>>): void;
        remove(arg0: K): V;
        get class(): typeof any
        get empty(): boolean
        static readonly IDENTITY: (Internal.MutableHashedLinkedMap$IdentityStrategy) & (Internal.Hash$Strategy<any>);
        static readonly BASIC: (Internal.MutableHashedLinkedMap$BasicStrategy) & (Internal.Hash$Strategy<any>);
    }
    type MutableHashedLinkedMap_<K, V> = MutableHashedLinkedMap<K, V>;
    class EnchantmentTableBlockEntity extends Internal.BlockEntity implements Internal.Nameable {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        requestModelDataUpdate(): void;
        setLevel(arg0: Internal.Level_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        notify(): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        onLoad(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        getBlockState(): Internal.BlockState;
        setRemoved(): void;
        static bookAnimationTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.EnchantmentTableBlockEntity_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getCustomName(): Internal.Component;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        setCustomName(arg0: Internal.Component_): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        clearRemoved(): void;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getPersistentData(): Internal.CompoundTag;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reviveCaps(): void;
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get blockPos(): BlockPos
        get removed(): boolean
        get name(): Internal.Component
        get blockState(): Internal.BlockState
        get type(): Internal.BlockEntityType<any>
        get customName(): Internal.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): Internal.Component
        get class(): typeof any
        set customName(arg0: Internal.Component_)
        get level(): Internal.Level
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get persistentData(): Internal.CompoundTag
        get modelData(): Internal.ModelData
        rot: number;
        tRot: number;
        open: number;
        flipT: number;
        oOpen: number;
        time: number;
        oFlip: number;
        oRot: number;
        flipA: number;
        flip: number;
    }
    type EnchantmentTableBlockEntity_ = EnchantmentTableBlockEntity;
    class RedstoneWallTorchBlock extends Internal.RedstoneTorchBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getDescriptionId(): string;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getSpeedFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getRenderPropertiesInternal(): any;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        setSpeedFactor(arg0: number): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        getFriction(): number;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        wait(arg0: number): void;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        notify(): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        setDestroySpeed(v: number): void;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        wait(): void;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static stateById(arg0: number): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get descriptionId(): string
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get jumpFactor(): number
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set destroySpeed(v: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get name(): Internal.MutableComponent
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get mod(): string
        set soundType(arg0: SoundType_)
        set hasCollision(arg0: boolean)
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static readonly LIT: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type RedstoneWallTorchBlock_ = RedstoneWallTorchBlock;
    interface UserPrincipal extends Internal.Principal {
        abstract hashCode(): number;
        abstract toString(): string;
        abstract getName(): string;
        abstract equals(arg0: any): boolean;
        implies(arg0: Internal.Subject_): boolean;
        get name(): string
    }
    type UserPrincipal_ = UserPrincipal;
    class Gui {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.ItemRenderer_)
        getClass(): typeof any;
        renderSelectedItemName(arg0: Internal.GuiGraphics_): void;
        renderVignette(arg0: Internal.GuiGraphics_, arg1: Internal.Entity_): void;
        setTimes(arg0: number, arg1: number, arg2: number): void;
        getBossOverlay(): Internal.BossHealthOverlay;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        renderHotbar(arg0: number, arg1: Internal.GuiGraphics_): void;
        setSubtitle(arg0: Internal.Component_): void;
        renderDemoOverlay(arg0: Internal.GuiGraphics_): void;
        setOverlayMessage(arg0: Internal.Component_, arg1: boolean): void;
        onDisconnected(): void;
        isShowingChatDisabledByPlayer(): boolean;
        getChat(): Internal.ChatComponent;
        renderSpyglassOverlay(arg0: Internal.GuiGraphics_, arg1: number): void;
        clearCache(): void;
        displayScoreboardSidebar(arg0: Internal.GuiGraphics_, arg1: Internal.Objective_): void;
        toString(): string;
        renderCrosshair(arg0: Internal.GuiGraphics_): void;
        renderExperienceBar(arg0: Internal.GuiGraphics_, arg1: number): void;
        notifyAll(): void;
        render(arg0: Internal.GuiGraphics_, arg1: number): void;
        getSpectatorGui(): Internal.SpectatorGui;
        renderJumpMeter(arg0: Internal.PlayerRideableJumping_, arg1: Internal.GuiGraphics_, arg2: number): void;
        renderSelectedItemName(arg0: Internal.GuiGraphics_, arg1: number): void;
        getFont(): Internal.Font;
        getGuiTicks(): number;
        hashCode(): number;
        setNowPlaying(arg0: Internal.Component_): void;
        setTitle(arg0: Internal.Component_): void;
        wait(): void;
        clear(): void;
        tick(arg0: boolean): void;
        wait(arg0: number): void;
        setChatDisabledByPlayerShown(arg0: boolean): void;
        resetTitleTimes(): void;
        equals(arg0: any): boolean;
        getTabList(): Internal.PlayerTabOverlay;
        renderEffects(arg0: Internal.GuiGraphics_): void;
        get class(): typeof any
        get bossOverlay(): Internal.BossHealthOverlay
        set subtitle(arg0: Internal.Component_)
        get showingChatDisabledByPlayer(): boolean
        get chat(): Internal.ChatComponent
        get spectatorGui(): Internal.SpectatorGui
        get font(): Internal.Font
        get guiTicks(): number
        set nowPlaying(arg0: Internal.Component_)
        set title(arg0: Internal.Component_)
        set chatDisabledByPlayerShown(arg0: boolean)
        get tabList(): Internal.PlayerTabOverlay
        vignetteBrightness: number;
    }
    type Gui_ = Gui;
    class DigDurabilityEnchantment extends Internal.Enchantment {
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): Internal.Component;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        getRarity(): Internal.Enchantment$Rarity;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        static shouldIgnoreDurabilityDrop(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.RandomSource_): boolean;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        getDescriptionId(): string;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getMinLevel(): number;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type DigDurabilityEnchantment_ = DigDurabilityEnchantment;
    interface LevelSimulatedReader {
        abstract getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        abstract isFluidAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.FluidState>): boolean;
        abstract isStateAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.BlockState>): boolean;
        abstract getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
    }
    type LevelSimulatedReader_ = LevelSimulatedReader;
    class Turtle extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Turtle>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        isOnFire(): boolean;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        dropLeash(arg0: boolean, arg1: boolean): void;
        clearRestriction(): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        "self()"(): Internal.LivingEntity;
        setXxa(arg0: number): void;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        setUUID(arg0: Internal.UUID_): void;
        getNoActionTime(): number;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        getBlockY(): number;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        isLayingEgg(): boolean;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        releaseUsingItem(): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): Internal.Component;
        playAmbientSound(): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        setHealth(arg0: number): void;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        setHomePos(arg0: BlockPos_): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getKillCredit(): Internal.LivingEntity;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getRemainingFireTicks(): number;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        canBeHitByProjectile(): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        skipDropExperience(): void;
        setSleepingPos(arg0: BlockPos_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isLiving(): boolean;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        canBreatheUnderwater(): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        isVehicle(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getMaxHeadYRot(): number;
        getLeashHolder(): Internal.Entity;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        getSensing(): Internal.Sensing;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getLootTableSeed(): number;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        static checkTurtleSpawnRules(arg0: Internal.EntityType_<Internal.Turtle>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        handleInsidePortal(arg0: BlockPos_): void;
        getArrowCount(): number;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        notify(): void;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        getRotationVector(): Internal.Vec2;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        getLastDamageSource(): DamageSource;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number): void;
        getAmbientSoundInterval(): number;
        getRestrictCenter(): BlockPos;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        getY(): number;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Internal.Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getLookControl(): Internal.LookControl;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        isPushedByFluid(): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getArmorCoverPercentage(): number;
        displayFireAnimation(): boolean;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        onLeaveCombat(): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: DamageSource_): void;
        isWithinRestriction(): boolean;
        canChangeDimensions(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        getTotalMovementSpeed(): number;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        getAttributes(): Internal.AttributeMap;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        setAge(arg0: number): void;
        getTarget(): Internal.LivingEntity;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        setPortalCooldown(): void;
        isInLove(): boolean;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        getStepHeight(): number;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        isSleeping(): boolean;
        stopUsingItem(): void;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        resetLove(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        getSpeed(): number;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getUuid(): Internal.UUID;
        setCanPickUpLoot(arg0: boolean): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        canPickUpLoot(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        kill(): void;
        onEnterCombat(): void;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        animateHurt(arg0: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        hasRestriction(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canMate(arg0: Internal.Animal_): boolean;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        maxUpStep(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        setGlowing(arg0: boolean): void;
        getMaxSpawnClusterSize(): number;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getUsername(): string;
        getInLoveTime(): number;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        setPortalCooldown(arg0: number): void;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getMobType(): Internal.MobType;
        isLeashed(): boolean;
        travel(arg0: Vec3d_): void;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        ageUp(arg0: number, arg1: boolean): void;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): Internal.AgeableMob;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        discard(): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getUseItemRemainingTicks(): number;
        setRotation(yaw: number, pitch: number): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        calculateEntityAnimation(arg0: boolean): void;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onAboveBubbleCol(arg0: boolean): void;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getJumpControl(): Internal.JumpControl;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        hasEgg(): boolean;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        canBreed(): boolean;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: Internal.Component_): void;
        isInvertedHealAndHarm(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        set defaultMovementSpeedMultiplier(speed: number)
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        set target(arg0: Internal.LivingEntity_)
        get pitch(): number
        get random(): Internal.RandomSource
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        get age(): number
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set motionZ(z: number)
        get blockY(): number
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get layingEgg(): boolean
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        set totalMovementSpeedMultiplier(speed: number)
        get controlledVehicle(): Internal.Entity
        set health(arg0: number)
        set homePos(arg0: BlockPos_)
        get armorValue(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get killCredit(): Internal.LivingEntity
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get autoSpinAttack(): boolean
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set absorptionAmount(arg0: number)
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get underWater(): boolean
        get maxHeadYRot(): number
        get leashHolder(): Internal.Entity
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get lootTableSeed(): number
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get moveControl(): Internal.MoveControl
        get onRails(): boolean
        get stingerCount(): number
        get defaultMovementSpeed(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get jumpBoostPower(): number
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get lastHurtMob(): Internal.LivingEntity
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        get restrictCenter(): BlockPos
        set arrowCount(arg0: number)
        get motionZ(): number
        get leftHanded(): boolean
        get persistenceRequired(): boolean
        get invisible(): boolean
        set z(z: number)
        get bedOrientation(): Internal.Direction
        get y(): number
        get profile(): Internal.GameProfile
        set inLove(arg0: Internal.Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get blocking(): boolean
        get offHandItem(): Internal.ItemStack
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        set inLoveTime(arg0: number)
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        set age(arg0: number)
        get target(): Internal.LivingEntity
        set sprinting(arg0: boolean)
        get inLove(): boolean
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get undead(): boolean
        get noGravity(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        get speed(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set canPickUpLoot(arg0: boolean)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get maxSpawnClusterSize(): number
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get inLoveTime(): number
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get lastAttacker(): Internal.LivingEntity
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        set portalCooldown(arg0: number)
        get randomY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        get mobType(): Internal.MobType
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get restrictRadius(): number
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        get fullyFrozen(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly BABY_ON_LAND_SELECTOR: Internal.Predicate<Internal.LivingEntity>;
        static readonly FOOD_ITEMS: (Internal.Ingredient) & (Internal.Ingredient);
    }
    type Turtle_ = Turtle;
    class ScreenEvent$MouseButtonReleased$Post extends Internal.ScreenEvent$MouseButtonReleased {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: boolean)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        wasHandled(): boolean;
        toString(): string;
        getButton(): number;
        setPhase(arg0: Internal.EventPriority_): void;
        getMouseX(): number;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        getMouseY(): number;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get button(): number
        set phase(arg0: Internal.EventPriority_)
        get mouseX(): number
        get screen(): Internal.Screen
        get mouseY(): number
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent$MouseButtonReleased$Post_ = ScreenEvent$MouseButtonReleased$Post;
    class ArrayRecipeComponent <T> extends Internal.Record implements Internal.RecipeComponent<T[]> {
        constructor(component: Internal.RecipeComponent_<T>, canWriteSelf: boolean, arrayClass: typeof any, emptyArray: T[])
        "replaceInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object[],dev.latvian.mods.kubejs.recipe.ReplacementMatch,dev.latvian.mods.kubejs.recipe.InputReplacement)"(recipe: Internal.RecipeJS_, original: T[], match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T[];
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, map: Internal.Map_<any, any>): void;
        orSelf(): Internal.RecipeComponent<T[]>;
        notify(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T[]>;
        remove(array: T[], index: number): T[];
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T[], O>;
        newArray(length: number): T[];
        replaceInput(recipe: Internal.RecipeJS_, original: T[], match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T[];
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        "replaceOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object[],dev.latvian.mods.kubejs.recipe.ReplacementMatch,dev.latvian.mods.kubejs.recipe.OutputReplacement)"(recipe: Internal.RecipeJS_, original: T[], match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T[];
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object[],dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: T[], match: Internal.ReplacementMatch_): boolean;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, json: Internal.JsonObject_): void;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        replaceInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.InputReplacement_): any;
        checkEmpty(key: Internal.RecipeKey_<T[]>, value: T[]): string;
        wait(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        checkValueHasChanged(oldValue: T[], newValue: T[]): boolean;
        write(recipe: Internal.RecipeJS_, value: T[]): Internal.JsonElement;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        canWriteSelf(): boolean;
        addAll(array: T[], ...values: T[]): T[];
        replaceOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.OutputReplacement_): any;
        getClass(): typeof any;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<T[]>;
        arrayClass(): typeof any;
        key(name: string): Internal.RecipeKey<T[]>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T[]>>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, json: Internal.JsonObject_): void;
        "replaceOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch,dev.latvian.mods.kubejs.recipe.OutputReplacement)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.OutputReplacement_): any;
        isInput(recipe: Internal.RecipeJS_, value: T[], match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        component(): Internal.RecipeComponent<T>;
        replaceOutput(recipe: Internal.RecipeJS_, original: T[], match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T[];
        add(array: T[], value: T): T[];
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object[])"(recipe: Internal.RecipeJS_, value: T[]): Internal.JsonElement;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T[]>>;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T[], O>;
        toString(): string;
        emptyArray(): T[];
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T[]>;
        isOutput(recipe: Internal.RecipeJS_, value: T[], match: Internal.ReplacementMatch_): boolean;
        notifyAll(): void;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T[]>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T[]>;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hashCode(): number;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        wait(arg0: number): void;
        equals(o: any): boolean;
        "replaceInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch,dev.latvian.mods.kubejs.recipe.InputReplacement)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.InputReplacement_): any;
        asArray(): Internal.ArrayRecipeComponent<T[]>;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object[],dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: T[], match: Internal.ReplacementMatch_): boolean;
        get class(): typeof any
    }
    type ArrayRecipeComponent_<T> = ArrayRecipeComponent<T>;
    interface SerializableTickContainer <T> {
        abstract save(arg0: number, arg1: Internal.Function_<T, string>): Internal.Tag;
        (arg0: number, arg1: Internal.Function<T, string>): Internal.Tag_;
    }
    type SerializableTickContainer_<T> = SerializableTickContainer<T> | ((arg0: number, arg1: Internal.Function<T, string>)=> Internal.Tag_);
    abstract class AbstractIntSet extends Internal.AbstractIntCollection implements Internal.Cloneable, Internal.IntSet {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        "contains(int)"(arg0: number): boolean;
        static of(arg0: number, arg1: number): Internal.IntSet;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        "remove(int)"(arg0: number): boolean;
        removeAll(arg0: Internal.IntCollection_): boolean;
        "removeAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        "add(int)"(arg0: number): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        remove(arg0: number): boolean;
        addAll(arg0: Internal.IntCollection_): boolean;
        retainAll(arg0: Internal.IntCollection_): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        "toArray(int[])"(arg0: number[]): number[];
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        static "of(int,int,int)"(arg0: number, arg1: number, arg2: number): Internal.IntSet;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): boolean;
        static "of(int)"(arg0: number): Internal.IntSet;
        static "of(int,int)"(arg0: number, arg1: number): Internal.IntSet;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        getClass(): typeof any;
        "retainAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        forEach(arg0: Internal.IntConsumer_): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        static "of(int[])"(...arg0: number[]): Internal.IntSet;
        static of(arg0: number, arg1: number, arg2: number): Internal.IntSet;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract iterator(): Internal.IntIterator;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        toString(): string;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(it.unimi.dsi.fastutil.ints.IntPredicate)"(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        notifyAll(): void;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        static of(...arg0: number[]): Internal.IntSet;
        abstract size(): number;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        abstract clear(): void;
        wait(arg0: number): void;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        addAll(arg0: Internal.Collection_<number>): boolean;
        static of(): Internal.IntSet;
        contains(arg0: number): boolean;
        notify(): void;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intParallelStream(): Internal.IntStream;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        spliterator(): Internal.IntSpliterator;
        "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intIterator(): Internal.IntIterator;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        add(arg0: number): boolean;
        containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        static of(arg0: number): Internal.IntSet;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        static "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        toIntArray(): number[];
        wait(arg0: number, arg1: number): void;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray(arg0: number[]): number[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        "addAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        "removeIf(java.util.function.IntPredicate)"(arg0: Internal.IntPredicate_): boolean;
        static "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        hashCode(): number;
        "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        "containsAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        equals(arg0: any): boolean;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractIntSet_ = AbstractIntSet;
    class LargeFireball extends Internal.Fireball {
        constructor(arg0: Internal.EntityType_<Internal.LargeFireball>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number, arg5: number)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        "getItem()"(): Internal.ItemStack;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getRemainingFireTicks(): number;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setOwner(arg0: Internal.Entity_): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isLiving(): boolean;
        getX(): number;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        shoot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        notify(): void;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        getRotationVector(): Internal.Vec2;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        self(): Internal.Entity;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        shootFromRotation(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getServer(): Internal.MinecraftServer;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        ejectPassengers(): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        setItem(arg0: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: DamageSource_): void;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        getOwner(): Internal.Entity;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        isSwimming(): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setSprinting(arg0: boolean): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        discard(): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getEffectSource(): Internal.Entity;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get "item()"(): Internal.ItemStack
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get remainingFireTicks(): number
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: Internal.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set owner(arg0: Internal.Entity_)
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get x(): number
        get glowing(): boolean
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        get underWater(): boolean
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        set item(arg0: Internal.ItemStack_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get commandSenderWorld(): Internal.Level
        get owner(): Internal.Entity
        get customName(): Internal.Component
        get class(): typeof any
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get facing(): Internal.Direction
        get swimming(): boolean
        get boundingBoxForCulling(): Internal.AABB
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get stepHeight(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        get randomY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get effectSource(): Internal.Entity
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get passenger(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
    }
    type LargeFireball_ = LargeFireball;
    interface ShortList extends Internal.ShortCollection, Internal.List<number>, Internal.Comparable<Internal.List<number>> {
        sort(arg0: Internal.ShortComparator_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        abstract "contains(short)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "remove(int)"(arg0: number): any;
        of<E>(arg0: E): Internal.List<E>;
        "of(short,short)"(arg0: number, arg1: number): this;
        "replaceAll(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): void;
        /**
         * @deprecated
        */
        "add(int,java.lang.Short)"(arg0: number, arg1: number): void;
        "replaceAll(it.unimi.dsi.fastutil.shorts.ShortUnaryOperator)"(arg0: Internal.ShortUnaryOperator_): void;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        removeIf(arg0: Internal.IntPredicate_): boolean;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        of(arg0: number, arg1: number, arg2: number): this;
        addAll(arg0: number, arg1: Internal.ShortList_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        abstract "add(int,short)"(arg0: number, arg1: number): void;
        abstract "add(short)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        indexOf(arg0: any): number;
        abstract toArray<T>(arg0: T[]): T[];
        of(arg0: number): this;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        abstract addAll(arg0: Internal.ShortCollection_): boolean;
        abstract getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        unstableSort(arg0: Internal.ShortComparator_): void;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        "unstableSort(it.unimi.dsi.fastutil.shorts.ShortComparator)"(arg0: Internal.ShortComparator_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: any): any;
        /**
         * @deprecated
        */
        "unstableSort(java.util.Comparator)"(arg0: Internal.Comparator_<number>): void;
        /**
         * @deprecated
        */
        lastIndexOf(arg0: any): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        /**
         * @deprecated
        */
        "indexOf(java.lang.Object)"(arg0: any): number;
        abstract "lastIndexOf(short)"(arg0: number): number;
        abstract addAll(arg0: number, arg1: Internal.Collection_<number>): boolean;
        forEach(arg0: Internal.IntConsumer_): void;
        setElements(arg0: number[]): void;
        "addAll(it.unimi.dsi.fastutil.shorts.ShortList)"(arg0: Internal.ShortList_): boolean;
        listIterator(arg0: number): Internal.ListIterator<any>;
        "removeIf(it.unimi.dsi.fastutil.shorts.ShortPredicate)"(arg0: Internal.ShortPredicate_): boolean;
        abstract "removeAll(it.unimi.dsi.fastutil.shorts.ShortCollection)"(arg0: Internal.ShortCollection_): boolean;
        "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.List<E>;
        abstract "addAll(it.unimi.dsi.fastutil.shorts.ShortCollection)"(arg0: Internal.ShortCollection_): boolean;
        abstract "toArray(short[])"(arg0: number[]): number[];
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        /**
         * @deprecated
        */
        "sort(java.util.Comparator)"(arg0: Internal.Comparator_<number>): void;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract "indexOf(short)"(arg0: number): number;
        /**
         * @deprecated
        */
        unstableSort(arg0: Internal.Comparator_<number>): void;
        of(...arg0: number[]): this;
        replaceAll(arg0: Internal.IntUnaryOperator_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "addAll(int,it.unimi.dsi.fastutil.shorts.ShortList)"(arg0: number, arg1: Internal.ShortList_): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        "sort(it.unimi.dsi.fastutil.shorts.ShortComparator)"(arg0: Internal.ShortComparator_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        subList(arg0: number, arg1: number): Internal.List<any>;
        abstract size(): number;
        abstract toShortArray(): number[];
        /**
         * @deprecated
        */
        toShortArray(arg0: number[]): number[];
        abstract "addAll(int,it.unimi.dsi.fastutil.shorts.ShortCollection)"(arg0: number, arg1: Internal.ShortCollection_): boolean;
        abstract clear(): void;
        of(): this;
        /**
         * @deprecated
        */
        get(arg0: number): number;
        abstract rem(arg0: number): boolean;
        abstract "containsAll(it.unimi.dsi.fastutil.shorts.ShortCollection)"(arg0: Internal.ShortCollection_): boolean;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: number): number;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        /**
         * @deprecated
        */
        "set(int,java.lang.Object)"(arg0: number, arg1: any): any;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        abstract addAll(arg0: number, arg1: Internal.ShortCollection_): boolean;
        /**
         * @deprecated
        */
        "add(int,java.lang.Object)"(arg0: number, arg1: any): void;
        forEach(arg0: Internal.ShortConsumer_): void;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: any): void;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        "of(short,short,short)"(arg0: number, arg1: number, arg2: number): this;
        intParallelStream(): Internal.IntStream;
        replaceAll(arg0: Internal.ShortUnaryOperator_): void;
        abstract "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intIterator(): Internal.IntIterator;
        abstract set(arg0: number, arg1: number): number;
        listIterator(): Internal.ListIterator<any>;
        abstract add(arg0: number, arg1: number): void;
        abstract size(arg0: number): void;
        abstract "addAll(int,java.util.Collection)"(arg0: number, arg1: Internal.Collection_<number>): boolean;
        abstract "set(int,short)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        "of(short)"(arg0: number): this;
        spliterator(): Internal.ShortSpliterator;
        abstract removeShort(arg0: number): number;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        abstract retainAll(arg0: Internal.ShortCollection_): boolean;
        abstract addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        of<E>(arg0: E, arg1: E): Internal.List<E>;
        addAll(arg0: Internal.ShortList_): boolean;
        abstract indexOf(arg0: number): number;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        "set(int,java.lang.Short)"(arg0: number, arg1: number): number;
        abstract iterator(): Internal.ShortListIterator;
        abstract addElements(arg0: number, arg1: number[]): void;
        /**
         * @deprecated
        */
        "add(java.lang.Short)"(arg0: number): boolean;
        abstract "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        abstract containsAll(arg0: Internal.ShortCollection_): boolean;
        abstract removeElements(arg0: number, arg1: number): void;
        abstract add(arg0: number): boolean;
        abstract "retainAll(it.unimi.dsi.fastutil.shorts.ShortCollection)"(arg0: Internal.ShortCollection_): boolean;
        /**
         * @deprecated
        */
        remove(arg0: number): any;
        setElements(arg0: number, arg1: number[]): void;
        abstract removeAll(arg0: Internal.ShortCollection_): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        abstract isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        "of(short[])"(...arg0: number[]): this;
        abstract getShort(arg0: number): number;
        of<E>(...arg0: E[]): Internal.List<E>;
        abstract lastIndexOf(arg0: number): number;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: number): void;
        of(arg0: number, arg1: number): this;
        "forEach(it.unimi.dsi.fastutil.shorts.ShortConsumer)"(arg0: Internal.ShortConsumer_): void;
        /**
         * @deprecated
        */
        replaceAll(arg0: Internal.UnaryOperator_<number>): void;
        abstract compareTo(arg0: Internal.List_<number>): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        abstract contains(arg0: number): boolean;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        "lastIndexOf(java.lang.Object)"(arg0: any): number;
        "removeIf(java.util.function.IntPredicate)"(arg0: Internal.IntPredicate_): boolean;
        removeIf(arg0: Internal.ShortPredicate_): boolean;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        "replaceAll(java.util.function.UnaryOperator)"(arg0: Internal.UnaryOperator_<number>): void;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        abstract hashCode(): number;
        /**
         * @deprecated
        */
        sort(arg0: Internal.Comparator_<number>): void;
        abstract toArray(arg0: number[]): number[];
        "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        abstract equals(arg0: any): boolean;
        set elements(arg0: number[])
        get empty(): boolean
    }
    type ShortList_ = ShortList;
    class LanguageManager implements Internal.ResourceManagerReloadListener {
        constructor(arg0: string)
        getSelected(): string;
        getLanguage(arg0: string): Internal.LanguageInfo;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        getJavaLocale(): Internal.Locale;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        setSelected(arg0: string): void;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getLanguages(): Internal.SortedMap<string, Internal.LanguageInfo>;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get selected(): string
        get class(): typeof any
        get javaLocale(): Internal.Locale
        set selected(arg0: string)
        get name(): string
        get languages(): Internal.SortedMap<string, Internal.LanguageInfo>
        static readonly DEFAULT_LANGUAGE_CODE: ("en_us") & (string);
    }
    type LanguageManager_ = LanguageManager;
    class GiantTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        placeTrunk(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: number, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): Internal.List<Internal.FoliagePlacer$FoliageAttachment>;
        getClass(): typeof any;
        hashCode(): number;
        isFree(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        toString(): string;
        getTreeHeight(arg0: Internal.RandomSource_): number;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.GiantTrunkPlacer>;
    }
    type GiantTrunkPlacer_ = GiantTrunkPlacer;
    interface IForgeAbstractMinecart {
        abstract setCanUseRail(arg0: boolean): void;
        isPoweredCart(): boolean;
        abstract setMaxSpeedAirLateral(arg0: number): void;
        getMaxCartSpeedOnRail(): number;
        getCurrentRailPosition(): BlockPos;
        abstract getDragAir(): number;
        abstract getMaxSpeedAirLateral(): number;
        abstract setCurrentCartSpeedCapOnRail(arg0: number): void;
        abstract getCurrentCartSpeedCapOnRail(): number;
        getSlopeAdjustment(): number;
        abstract setDragAir(arg0: number): void;
        abstract setMaxSpeedAirVertical(arg0: number): void;
        shouldDoRailFunctions(): boolean;
        abstract moveMinecartOnRail(arg0: BlockPos_): void;
        abstract getMaxSpeedAirVertical(): number;
        canBeRidden(): boolean;
        getComparatorLevel(): number;
        abstract getMaxSpeedWithRail(): number;
        abstract canUseRail(): boolean;
        set canUseRail(arg0: boolean)
        get poweredCart(): boolean
        set maxSpeedAirLateral(arg0: number)
        get maxCartSpeedOnRail(): number
        get currentRailPosition(): BlockPos
        get dragAir(): number
        get maxSpeedAirLateral(): number
        set currentCartSpeedCapOnRail(arg0: number)
        get currentCartSpeedCapOnRail(): number
        get slopeAdjustment(): number
        set dragAir(arg0: number)
        set maxSpeedAirVertical(arg0: number)
        get maxSpeedAirVertical(): number
        get comparatorLevel(): number
        get maxSpeedWithRail(): number
        readonly DEFAULT_MAX_SPEED_AIR_VERTICAL: (-1.0) & (number);
        readonly DEFAULT_MAX_SPEED_AIR_LATERAL: (0.4) & (number);
        readonly DEFAULT_AIR_DRAG: (0.949999988079071) & (number);
    }
    type IForgeAbstractMinecart_ = IForgeAbstractMinecart;
    /**
     * Invoked when a player gets an advancement.
    */
    class PlayerAdvancementEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.ServerPlayer_, advancement: Internal.Advancement_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        notifyAll(): void;
        /**
         * Returns the player that got the advancement.
        */
        getEntity(): Internal.Player;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        /**
         * Returns the advancement that was obtained.
        */
        getAdvancement(): Internal.AdvancementJS;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        getPlayer(): Internal.Player;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        getServer(): Internal.MinecraftServer;
        get class(): typeof any
        /**
         * Returns the player that got the advancement.
        */
        get entity(): Internal.Player
        get level(): Internal.Level
        /**
         * Returns the advancement that was obtained.
        */
        get advancement(): Internal.AdvancementJS
        get player(): Internal.Player
        get server(): Internal.MinecraftServer
    }
    type PlayerAdvancementEventJS_ = PlayerAdvancementEventJS;
    class DimensionType$MonsterSettings extends Internal.Record {
        constructor(arg0: boolean, arg1: boolean, arg2: Internal.IntProvider_, arg3: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        monsterSpawnBlockLightLimit(): number;
        piglinSafe(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        hasRaids(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        monsterSpawnLightTest(): Internal.IntProvider;
        get class(): typeof any
        static readonly CODEC: Internal.MapCodec<Internal.DimensionType$MonsterSettings>;
    }
    type DimensionType$MonsterSettings_ = DimensionType$MonsterSettings;
    interface CachedOutput {
        abstract writeIfNeeded(arg0: Internal.Path_, arg1: number[], arg2: Internal.HashCode_): void;
        (arg0: Internal.Path, arg1: number[], arg2: Internal.HashCode): void;
        readonly NO_CACHE: Internal.CachedOutput;
    }
    type CachedOutput_ = CachedOutput | ((arg0: Internal.Path, arg1: number[], arg2: Internal.HashCode)=> void);
    class Collector$Characteristics extends Internal.Enum<Internal.Collector$Characteristics> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.Collector$Characteristics[];
        compareTo(arg0: Internal.Collector$Characteristics_): number;
        toString(): string;
        notifyAll(): void;
        "compareTo(java.util.stream.Collector$Characteristics)"(arg0: Internal.Collector$Characteristics_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Collector$Characteristics>>;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.Collector$Characteristics;
        wait(arg0: number): void;
        getDeclaringClass(): typeof Internal.Collector$Characteristics;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.Collector$Characteristics
        static readonly CONCURRENT: (Internal.Collector$Characteristics) & (Internal.Collector$Characteristics);
        static readonly IDENTITY_FINISH: (Internal.Collector$Characteristics) & (Internal.Collector$Characteristics);
        static readonly UNORDERED: (Internal.Collector$Characteristics) & (Internal.Collector$Characteristics);
    }
    type Collector$Characteristics_ = Collector$Characteristics | "identity_finish" | "unordered" | "concurrent";
    interface IForgeShearable {
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
    }
    type IForgeShearable_ = IForgeShearable;
    interface Display$FloatInterpolator {
        abstract get(arg0: number): number;
        constant(arg0: number): this;
        (arg0: number): number;
    }
    type Display$FloatInterpolator_ = Display$FloatInterpolator | ((arg0: number)=> number);
    interface ServerLevelKJS extends Internal.LevelKJS, Internal.WithPersistentData {
        getDisplayName(): Internal.Component;
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean, player: Internal.ServerPlayer_): void;
        self(): Internal.Level;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean): void;
        "getBlock(net.minecraft.core.BlockPos)"(pos: BlockPos_): Internal.BlockContainerJS;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getSide(): Internal.ScriptType;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        "getBlock(net.minecraft.world.level.block.entity.BlockEntity)"(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getDimension(): ResourceLocation;
        getPersistentData(): Internal.CompoundTag;
        getName(): Internal.Component;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        runCommandSilent(command: string): number;
        tell(message: Internal.Component_): void;
        abstract getData(): Internal.AttachedData<Internal.Level>;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        isOverworld(): boolean;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        runCommand(command: string): number;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        setTime(time: number): void;
        get displayName(): Internal.Component
        get side(): Internal.ScriptType
        get dimension(): ResourceLocation
        get persistentData(): Internal.CompoundTag
        get name(): Internal.Component
        get entities(): Internal.EntityArrayList
        get data(): Internal.AttachedData<Internal.Level>
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get overworld(): boolean
        set time(time: number)
        (): Internal.AttachedData_<Internal.Level>;
    }
    type ServerLevelKJS_ = ServerLevelKJS | (()=> Internal.AttachedData_<Internal.Level>);
    class Provider$Service {
        constructor(arg0: Internal.Provider_, arg1: string, arg2: string, arg3: string, arg4: Internal.List_<string>, arg5: Internal.Map_<string, string>)
        getClass(): typeof any;
        newInstance(arg0: any): any;
        getAttribute(arg0: string): string;
        toString(): string;
        notifyAll(): void;
        getClassName(): string;
        supportsParameter(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getProvider(): Internal.Provider;
        getAlgorithm(): string;
        hashCode(): number;
        wait(): void;
        getType(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get className(): string
        get provider(): Internal.Provider
        get algorithm(): string
        get type(): string
    }
    type Provider$Service_ = Provider$Service;
    class JsonNull extends Internal.JsonElement {
        constructor()
        getClass(): typeof any;
        getAsBigDecimal(): Internal.BigDecimal;
        deepCopy(): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAsJsonPrimitive(): Internal.JsonPrimitive;
        getAsLong(): number;
        getAsFloat(): number;
        isJsonObject(): boolean;
        isJsonArray(): boolean;
        getAsJsonArray(): Internal.JsonArray;
        getAsBoolean(): boolean;
        toString(): string;
        isJsonPrimitive(): boolean;
        isJsonNull(): boolean;
        notifyAll(): void;
        getAsBigInteger(): Internal.BigInteger;
        getAsDouble(): number;
        /**
         * @deprecated
        */
        getAsCharacter(): string;
        hashCode(): number;
        getAsString(): string;
        getAsInt(): number;
        getAsByte(): number;
        getAsNumber(): number;
        wait(): void;
        getAsJsonObject(): Internal.JsonObject;
        wait(arg0: number): void;
        getAsShort(): number;
        equals(arg0: any): boolean;
        getAsJsonNull(): this;
        get class(): typeof any
        get asBigDecimal(): Internal.BigDecimal
        get asJsonPrimitive(): Internal.JsonPrimitive
        get asLong(): number
        get asFloat(): number
        get jsonObject(): boolean
        get jsonArray(): boolean
        get asJsonArray(): Internal.JsonArray
        get asBoolean(): boolean
        get jsonPrimitive(): boolean
        get jsonNull(): boolean
        get asBigInteger(): Internal.BigInteger
        get asDouble(): number
        /**
         * @deprecated
        */
        get asCharacter(): string
        get asString(): string
        get asInt(): number
        get asByte(): number
        get asNumber(): number
        get asJsonObject(): Internal.JsonObject
        get asShort(): number
        get asJsonNull(): Internal.JsonNull
        static readonly INSTANCE: (Internal.JsonNull) & (Internal.JsonNull);
    }
    type JsonNull_ = JsonNull;
    class NoiseSettings extends Internal.Record {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        toString(): string;
        getCellHeight(): number;
        noiseSizeVertical(): number;
        static create(arg0: number, arg1: number, arg2: number, arg3: number): Internal.NoiseSettings;
        clampToHeightAccessor(arg0: Internal.LevelHeightAccessor_): this;
        notifyAll(): void;
        height(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        minY(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        noiseSizeHorizontal(): number;
        getCellWidth(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get cellHeight(): number
        get cellWidth(): number
        static readonly CODEC: Internal.Codec<Internal.NoiseSettings>;
    }
    type NoiseSettings_ = NoiseSettings;
    class RepairItemRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type RepairItemRecipe_ = RepairItemRecipe;
    interface AudioStream extends Internal.Closeable {
        abstract read(arg0: number): Internal.ByteBuffer;
        abstract close(): void;
        abstract getFormat(): Internal.AudioFormat;
        get format(): Internal.AudioFormat
    }
    type AudioStream_ = AudioStream;
    class LevelResource {
        constructor(arg0: string)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getId(): string;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get id(): string
        static readonly PLAYER_OLD_DATA_DIR: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly OLD_LEVEL_DATA_FILE: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly PLAYER_STATS_DIR: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly ROOT: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly MAP_RESOURCE_FILE: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly GENERATED_DIR: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly LOCK_FILE: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly LEVEL_DATA_FILE: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly ICON_FILE: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly PLAYER_ADVANCEMENTS_DIR: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly PLAYER_DATA_DIR: (Internal.LevelResource) & (Internal.LevelResource);
        static readonly DATAPACK_DIR: (Internal.LevelResource) & (Internal.LevelResource);
    }
    type LevelResource_ = LevelResource;
    class ClientChunkCache extends Internal.ChunkSource {
        constructor(arg0: Internal.ClientLevel_, arg1: number)
        getClass(): typeof any;
        gatherStats(): string;
        updateChunkForced(arg0: Internal.ChunkPos_, arg1: boolean): void;
        drop(arg0: number, arg1: number): void;
        hasChunk(arg0: number, arg1: number): boolean;
        setSpawnSettings(arg0: boolean, arg1: boolean): void;
        notify(): void;
        onLightUpdate(arg0: Internal.LightLayer_, arg1: Internal.SectionPos_): void;
        replaceWithPacketData(arg0: number, arg1: number, arg2: Internal.FriendlyByteBuf_, arg3: Internal.CompoundTag_, arg4: Internal.Consumer_<Internal.ClientboundLevelChunkPacketData$BlockEntityTagOutput>): Internal.LevelChunk;
        getChunkNow(arg0: number, arg1: number): Internal.LevelChunk;
        wait(arg0: number, arg1: number): void;
        getChunkForLighting(arg0: number, arg1: number): Internal.LightChunk;
        updateViewCenter(arg0: number, arg1: number): void;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.LevelChunk;
        getLightEngine(): Internal.LevelLightEngine;
        getLoadedChunksCount(): number;
        replaceBiomes(arg0: number, arg1: number, arg2: Internal.FriendlyByteBuf_): void;
        getLevel(): Internal.BlockGetter;
        toString(): string;
        tick(arg0: Internal.BooleanSupplier_, arg1: boolean): void;
        notifyAll(): void;
        getChunk(arg0: number, arg1: number, arg2: boolean): Internal.LevelChunk;
        hashCode(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        updateViewRadius(arg0: number): void;
        get class(): typeof any
        get lightEngine(): Internal.LevelLightEngine
        get loadedChunksCount(): number
        get level(): Internal.BlockGetter
    }
    type ClientChunkCache_ = ClientChunkCache;
    class FungusBlock extends Internal.BushBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.ResourceKey_<Internal.ConfiguredFeature<any, any>>, arg2: Internal.Block_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type FungusBlock_ = FungusBlock;
    class WoodlandMansionStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.WoodlandMansionStructure>;
    }
    type WoodlandMansionStructure_ = WoodlandMansionStructure;
    class Shulker extends Internal.AbstractGolem implements Internal.Enemy, Internal.VariantHolder<Internal.Optional<Internal.DyeColor>> {
        constructor(arg0: Internal.EntityType_<Internal.Shulker>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        isOnFire(): boolean;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        dropLeash(arg0: boolean, arg1: boolean): void;
        clearRestriction(): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        "self()"(): Internal.LivingEntity;
        setXxa(arg0: number): void;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        setUUID(arg0: Internal.UUID_): void;
        getNoActionTime(): number;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        releaseUsingItem(): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        static getProgressDeltaAabb(arg0: Internal.Direction_, arg1: number, arg2: number): Internal.AABB;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        "setVariant(java.util.Optional)"(arg0: Internal.Optional_<Internal.DyeColor>): void;
        getName(): Internal.Component;
        playAmbientSound(): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        setHealth(arg0: number): void;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getKillCredit(): Internal.LivingEntity;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getRemainingFireTicks(): number;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        canBeHitByProjectile(): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        skipDropExperience(): void;
        setSleepingPos(arg0: BlockPos_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getColor(): Internal.DyeColor;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isLiving(): boolean;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        isVehicle(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        static getProgressAabb(arg0: Internal.Direction_, arg1: number): Internal.AABB;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getMaxHeadYRot(): number;
        getLeashHolder(): Internal.Entity;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        getSensing(): Internal.Sensing;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getClientPeekAmount(arg0: number): number;
        handleInsidePortal(arg0: BlockPos_): void;
        getArrowCount(): number;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        notify(): void;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        getRotationVector(): Internal.Vec2;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getAmbientSoundInterval(): number;
        getRestrictCenter(): BlockPos;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        getY(): number;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getLookControl(): Internal.LookControl;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getArmorCoverPercentage(): number;
        displayFireAnimation(): boolean;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        onLeaveCombat(): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: DamageSource_): void;
        isWithinRestriction(): boolean;
        canChangeDimensions(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        getRenderPosition(arg0: number): Internal.Optional<Vec3d>;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        getTotalMovementSpeed(): number;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        getAttributes(): Internal.AttributeMap;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        getTarget(): Internal.LivingEntity;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        getStepHeight(): number;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        isSleeping(): boolean;
        stopUsingItem(): void;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        getSpeed(): number;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getUuid(): Internal.UUID;
        setVariant(arg0: Internal.Optional_<Internal.DyeColor>): void;
        setCanPickUpLoot(arg0: boolean): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        canPickUpLoot(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        kill(): void;
        onEnterCombat(): void;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        animateHurt(arg0: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        hasRestriction(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        maxUpStep(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        setGlowing(arg0: boolean): void;
        getMaxSpawnClusterSize(): number;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        "setVariant(java.lang.Object)"(arg0: any): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        setPortalCooldown(arg0: number): void;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getMobType(): Internal.MobType;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getVariant(): any;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        discard(): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getUseItemRemainingTicks(): number;
        setRotation(yaw: number, pitch: number): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        calculateEntityAnimation(arg0: boolean): void;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onAboveBubbleCol(arg0: boolean): void;
        getAttachFace(): Internal.Direction;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getJumpControl(): Internal.JumpControl;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: Internal.Component_): void;
        isInvertedHealAndHarm(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        setVariant(arg0: any): void;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        set defaultMovementSpeedMultiplier(speed: number)
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        set target(arg0: Internal.LivingEntity_)
        get pitch(): number
        get random(): Internal.RandomSource
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set motionZ(z: number)
        get blockY(): number
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set "variant(java.util.Optional)"(arg0: Internal.Optional_<Internal.DyeColor>)
        get name(): Internal.Component
        set totalMovementSpeedMultiplier(speed: number)
        get controlledVehicle(): Internal.Entity
        set health(arg0: number)
        get armorValue(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get killCredit(): Internal.LivingEntity
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get autoSpinAttack(): boolean
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set absorptionAmount(arg0: number)
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get color(): Internal.DyeColor
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get underWater(): boolean
        get maxHeadYRot(): number
        get leashHolder(): Internal.Entity
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get moveControl(): Internal.MoveControl
        get onRails(): boolean
        get stingerCount(): number
        get defaultMovementSpeed(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get jumpBoostPower(): number
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get lastHurtMob(): Internal.LivingEntity
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        get restrictCenter(): BlockPos
        set arrowCount(arg0: number)
        get motionZ(): number
        get leftHanded(): boolean
        get persistenceRequired(): boolean
        get invisible(): boolean
        set z(z: number)
        get bedOrientation(): Internal.Direction
        get y(): number
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get blocking(): boolean
        get offHandItem(): Internal.ItemStack
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        get target(): Internal.LivingEntity
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get undead(): boolean
        get noGravity(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        get speed(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set variant(arg0: Internal.Optional_<Internal.DyeColor>)
        set canPickUpLoot(arg0: boolean)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get maxSpawnClusterSize(): number
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        set "variant(java.lang.Object)"(arg0: any)
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get lastAttacker(): Internal.LivingEntity
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        set portalCooldown(arg0: number)
        get randomY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        get mobType(): Internal.MobType
        get leashed(): boolean
        get variant(): any
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get attachFace(): Internal.Direction
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get restrictRadius(): number
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set variant(arg0: any)
        get fullyFrozen(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type Shulker_ = Shulker;
    class SpikeConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: boolean, arg1: Internal.List_<Internal.SpikeFeature$EndSpike>, arg2: BlockPos_)
        getClass(): typeof any;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        notifyAll(): void;
        getCrystalBeamTarget(): BlockPos;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isCrystalInvulnerable(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getSpikes(): Internal.List<Internal.SpikeFeature$EndSpike>;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        get crystalBeamTarget(): BlockPos
        get crystalInvulnerable(): boolean
        get spikes(): Internal.List<Internal.SpikeFeature$EndSpike>
        static readonly CODEC: Internal.Codec<Internal.SpikeConfiguration>;
    }
    type SpikeConfiguration_ = SpikeConfiguration;
    class ExplosionEvent$Start extends Internal.ExplosionEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.Explosion_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getExplosion(): Internal.Explosion;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get level(): Internal.Level
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get explosion(): Internal.Explosion
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ExplosionEvent$Start_ = ExplosionEvent$Start;
    class ClientboundPlaceGhostRecipePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: Internal.Recipe_<any>)
        handle(arg0: Internal.PacketListener_): void;
        getRecipe(): ResourceLocation;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        getContainerId(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get recipe(): ResourceLocation
        get class(): typeof any
        get containerId(): number
        get skippable(): boolean
    }
    type ClientboundPlaceGhostRecipePacket_ = ClientboundPlaceGhostRecipePacket;
    class ThrownExperienceBottle extends Internal.ThrowableItemProjectile {
        constructor(arg0: Internal.EntityType_<Internal.ThrownExperienceBottle>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getPosition(arg0: number): Vec3d;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        "getItem()"(): Internal.ItemStack;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getRemainingFireTicks(): number;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setOwner(arg0: Internal.Entity_): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isLiving(): boolean;
        getX(): number;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        shoot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        notify(): void;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        getRotationVector(): Internal.Vec2;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        self(): Internal.Entity;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        shootFromRotation(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getServer(): Internal.MinecraftServer;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        ejectPassengers(): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        setItem(arg0: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: DamageSource_): void;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        getOwner(): Internal.Entity;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        isSwimming(): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setSprinting(arg0: boolean): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        getRandomY(): number;
        getDisplayName(): Internal.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        discard(): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getEffectSource(): Internal.Entity;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        isDiscrete(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get "item()"(): Internal.ItemStack
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get remainingFireTicks(): number
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: Internal.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set owner(arg0: Internal.Entity_)
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get x(): number
        get glowing(): boolean
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        get underWater(): boolean
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        set item(arg0: Internal.ItemStack_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get commandSenderWorld(): Internal.Level
        get owner(): Internal.Entity
        get customName(): Internal.Component
        get class(): typeof any
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get facing(): Internal.Direction
        get swimming(): boolean
        get boundingBoxForCulling(): Internal.AABB
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get portalWaitTime(): number
        get inWater(): boolean
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get stepHeight(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        get randomY(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get effectSource(): Internal.Entity
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get passenger(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get teamColor(): number
        get discrete(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
    }
    type ThrownExperienceBottle_ = ThrownExperienceBottle;
    class ArmorItem extends Internal.Item implements Internal.Equipable, Internal.ModifiableItemKJS {
        constructor(arg0: Internal.ArmorMaterial_, arg1: Internal.ArmorItem$Type_, arg2: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getType(): Internal.ArmorItem$Type;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getDefense(): number;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        getEquipmentSlot(): Internal.EquipmentSlot;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getEquipSound(): Internal.SoundEvent;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        getToughness(): number;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly DISPENSE_ITEM_BEHAVIOR: Internal.DispenseItemBehavior;
        defaultModifiers: Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
    }
    type ArmorItem_ = ArmorItem;
    class ItemDisplayContext extends Internal.Enum<Internal.ItemDisplayContext> implements Internal.IExtensibleEnum, Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        compareTo(arg0: Internal.ItemDisplayContext_): number;
        getSerializedName(): string;
        isModded(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static valueOf(arg0: string): Internal.ItemDisplayContext;
        getDeclaringClass(): typeof Internal.ItemDisplayContext;
        fallback(): this;
        getId(): number;
        static values(): Internal.ItemDisplayContext[];
        "compareTo(net.minecraft.world.item.ItemDisplayContext)"(arg0: Internal.ItemDisplayContext_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        firstPerson(): boolean;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        toString(): string;
        /**
         * @deprecated
        */
        init(): void;
        static create(arg0: string, arg1: ResourceLocation_, arg2: Internal.ItemDisplayContext_): Internal.ItemDisplayContext;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ItemDisplayContext>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get modded(): boolean
        get declaringClass(): typeof Internal.ItemDisplayContext
        get id(): number
        static readonly HEAD: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly NONE: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly GUI: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly CODEC: Internal.Codec<Internal.ItemDisplayContext>;
        static readonly THIRD_PERSON_LEFT_HAND: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly FIXED: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly FIRST_PERSON_LEFT_HAND: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly FIRST_PERSON_RIGHT_HAND: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly THIRD_PERSON_RIGHT_HAND: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly GROUND: (Internal.ItemDisplayContext) & (Internal.ItemDisplayContext);
        static readonly BY_ID: Internal.IntFunction<Internal.ItemDisplayContext>;
        static readonly ADD_CALLBACK: Internal.IForgeRegistry$AddCallback<Internal.ItemDisplayContext>;
    }
    type ItemDisplayContext_ = "fixed" | "first_person_right_hand" | ItemDisplayContext | "gui" | "third_person_left_hand" | "ground" | "head" | "none" | "third_person_right_hand" | "first_person_left_hand";
    interface AdvancementList$Listener {
        abstract onRemoveAdvancementRoot(arg0: Internal.Advancement_): void;
        abstract onAddAdvancementRoot(arg0: Internal.Advancement_): void;
        abstract onRemoveAdvancementTask(arg0: Internal.Advancement_): void;
        abstract onAddAdvancementTask(arg0: Internal.Advancement_): void;
        abstract onAdvancementsCleared(): void;
    }
    type AdvancementList$Listener_ = AdvancementList$Listener;
    class PointedDripstoneFeature extends Internal.Feature<Internal.PointedDripstoneConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.PointedDripstoneConfiguration>)
        place(arg0: Internal.FeaturePlaceContext_<Internal.PointedDripstoneConfiguration>): boolean;
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.PointedDripstoneConfiguration, Internal.Feature<Internal.PointedDripstoneConfiguration>>>;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        place(arg0: Internal.PointedDripstoneConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        get class(): typeof any
    }
    type PointedDripstoneFeature_ = PointedDripstoneFeature;
    interface Tickable {
        abstract tick(): void;
        (): void;
    }
    type Tickable_ = Tickable | (()=> void);
    class AtomicInteger extends number implements Internal.Serializable {
        constructor()
        constructor(arg0: number)
        decrementAndGet(): number;
        getClass(): typeof any;
        compareAndExchangeAcquire(arg0: number, arg1: number): number;
        doubleValue(): number;
        set(arg0: number): void;
        floatValue(): number;
        getAndAccumulate(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        /**
         * @deprecated
        */
        weakCompareAndSet(arg0: number, arg1: number): boolean;
        setRelease(arg0: number): void;
        updateAndGet(arg0: Internal.IntUnaryOperator_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getOpaque(): number;
        getAndSet(arg0: number): number;
        weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
        accumulateAndGet(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        getAndAdd(arg0: number): number;
        intValue(): number;
        weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
        compareAndSet(arg0: number, arg1: number): boolean;
        lazySet(arg0: number): void;
        weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
        getAcquire(): number;
        getAndDecrement(): number;
        compareAndExchange(arg0: number, arg1: number): number;
        longValue(): number;
        compareAndExchangeRelease(arg0: number, arg1: number): number;
        toString(): string;
        setOpaque(arg0: number): void;
        notifyAll(): void;
        incrementAndGet(): number;
        getAndUpdate(arg0: Internal.IntUnaryOperator_): number;
        shortValue(): number;
        hashCode(): number;
        getAndIncrement(): number;
        weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
        wait(): void;
        wait(arg0: number): void;
        setPlain(arg0: number): void;
        addAndGet(arg0: number): number;
        getPlain(): number;
        equals(arg0: any): boolean;
        get(): number;
        byteValue(): number;
        get class(): typeof any
        set release(arg0: number)
        get opaque(): number
        get acquire(): number
        get andDecrement(): number
        set opaque(arg0: number)
        get andIncrement(): number
        set plain(arg0: number)
        get plain(): number
    }
    type AtomicInteger_ = AtomicInteger;
    interface VariantHolder <T> {
        abstract setVariant(arg0: T): void;
        abstract getVariant(): T;
        set variant(arg0: T)
        get variant(): T
    }
    type VariantHolder_<T> = VariantHolder<T>;
    class ClientboundMoveVehiclePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        getXRot(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getX(): number;
        getY(): number;
        getZ(): number;
        hashCode(): number;
        getYRot(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get XRot(): number
        get skippable(): boolean
        get x(): number
        get y(): number
        get z(): number
        get YRot(): number
    }
    type ClientboundMoveVehiclePacket_ = ClientboundMoveVehiclePacket;
    class CanyonCarverConfiguration$CanyonShapeConfiguration {
        constructor(arg0: Internal.FloatProvider_, arg1: Internal.FloatProvider_, arg2: number, arg3: Internal.FloatProvider_, arg4: number, arg5: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly verticalRadiusCenterFactor: number;
        readonly verticalRadiusDefaultFactor: number;
        readonly distanceFactor: Internal.FloatProvider;
        readonly widthSmoothness: number;
        static readonly CODEC: Internal.Codec<Internal.CanyonCarverConfiguration$CanyonShapeConfiguration>;
        readonly thickness: Internal.FloatProvider;
        readonly horizontalRadiusFactor: Internal.FloatProvider;
    }
    type CanyonCarverConfiguration$CanyonShapeConfiguration_ = CanyonCarverConfiguration$CanyonShapeConfiguration;
    class WritableBookItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        static makeSureTagIsValid(arg0: Internal.CompoundTag_): boolean;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type WritableBookItem_ = WritableBookItem;
    class ClientboundSetPassengersPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getPassengers(): number[];
        notifyAll(): void;
        getVehicle(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get passengers(): number[]
        get vehicle(): number
        get skippable(): boolean
    }
    type ClientboundSetPassengersPacket_ = ClientboundSetPassengersPacket;
    interface BlockColor {
        abstract getColor(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: number): number;
        (arg0: Internal.BlockState, arg1: Internal.BlockAndTintGetter, arg2: BlockPos, arg3: number): number;
    }
    type BlockColor_ = BlockColor | ((arg0: Internal.BlockState, arg1: Internal.BlockAndTintGetter, arg2: BlockPos, arg3: number)=> number);
    class ConsoleLine$SourceLine extends Internal.Record {
        constructor(source: string, line: number)
        constructor(buf: Internal.FriendlyByteBuf_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        static write(buf: Internal.FriendlyByteBuf_, sourceLine: Internal.ConsoleLine$SourceLine_): void;
        wait(): void;
        notifyAll(): void;
        line(): number;
        source(): string;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ConsoleLine$SourceLine_ = ConsoleLine$SourceLine;
    class Stat <T> extends Internal.ObjectiveCriteria {
        getClass(): typeof any;
        getDefaultRenderType(): Internal.ObjectiveCriteria$RenderType;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        static byName(arg0: string): Internal.Optional<Internal.ObjectiveCriteria>;
        wait(): void;
        getValue(): T;
        getType(): Internal.StatType<T>;
        getName(): string;
        wait(arg0: number): void;
        isReadOnly(): boolean;
        equals(arg0: any): boolean;
        static buildName<T>(arg0: Internal.StatType_<T>, arg1: T): string;
        static getCustomCriteriaNames(): Internal.Set<string>;
        format(arg0: number): string;
        get class(): typeof any
        get defaultRenderType(): Internal.ObjectiveCriteria$RenderType
        get value(): T
        get type(): Internal.StatType<T>
        get name(): string
        get readOnly(): boolean
        get customCriteriaNames(): Internal.Set<string>
    }
    type Stat_<T> = Stat<T>;
    interface Byte2ObjectFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        "apply(java.lang.Byte)"(arg0: number): V;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2ObjectFunction<V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Byte2ByteFunction;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2ObjectFunction<V>;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2ObjectFunction<V>;
        "put(byte,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        "getOrDefault(byte,java.lang.Object)"(arg0: number, arg1: V): V;
        abstract get(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        remove(arg0: number): V;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Byte2DoubleFunction;
        apply(arg0: number): V;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        getOrDefault(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2ObjectFunction<V>;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        "containsKey(byte)"(arg0: number): boolean;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Byte2ShortFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        put(arg0: number, arg1: V): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Byte2ObjectFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Byte2FloatFunction;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Byte2LongFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        "remove(byte)"(arg0: number): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        containsKey(arg0: number): boolean;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Byte2CharFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        abstract "get(byte)"(arg0: number): V;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2ObjectFunction<V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Byte2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2ObjectFunction<V>;
        size(): number;
        clear(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Byte,java.lang.Object)"(arg0: number, arg1: V): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Byte2IntFunction;
        /**
         * @deprecated
        */
        "apply(int)"(arg0: number): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
    }
    type Byte2ObjectFunction_<V> = Byte2ObjectFunction<V>;
    interface ChunkProgressListener {
        abstract start(): void;
        abstract stop(): void;
        abstract onStatusChange(arg0: Internal.ChunkPos_, arg1: Internal.ChunkStatus_): void;
        abstract updateSpawnPos(arg0: Internal.ChunkPos_): void;
    }
    type ChunkProgressListener_ = ChunkProgressListener;
    class ScreenEvent$CharacterTyped$Post extends Internal.ScreenEvent$CharacterTyped {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: string, arg2: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getModifiers(): number;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getCodePoint(): string;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get modifiers(): number
        get screen(): Internal.Screen
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get codePoint(): string
        get phase(): Internal.EventPriority
    }
    type ScreenEvent$CharacterTyped$Post_ = ScreenEvent$CharacterTyped$Post;
    class StructureCheckResult extends Internal.Enum<Internal.StructureCheckResult> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        compareTo(arg0: Internal.StructureCheckResult_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static valueOf(arg0: string): Internal.StructureCheckResult;
        compareTo(arg0: any): number;
        static values(): Internal.StructureCheckResult[];
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.StructureCheckResult>>;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.StructureCheckResult;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(net.minecraft.world.level.levelgen.structure.StructureCheckResult)"(arg0: Internal.StructureCheckResult_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.StructureCheckResult
        static readonly START_NOT_PRESENT: (Internal.StructureCheckResult) & (Internal.StructureCheckResult);
        static readonly CHUNK_LOAD_NEEDED: (Internal.StructureCheckResult) & (Internal.StructureCheckResult);
        static readonly START_PRESENT: (Internal.StructureCheckResult) & (Internal.StructureCheckResult);
    }
    type StructureCheckResult_ = "start_present" | "chunk_load_needed" | StructureCheckResult | "start_not_present";
    class ServerboundClientCommandPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.ServerboundClientCommandPacket$Action_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        getAction(): Internal.ServerboundClientCommandPacket$Action;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get action(): Internal.ServerboundClientCommandPacket$Action
    }
    type ServerboundClientCommandPacket_ = ServerboundClientCommandPacket;
    class WitherRoseBlock extends Internal.FlowerBlock {
        constructor(arg0: Internal.MobEffect_, arg1: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getSuspiciousEffect(): Internal.MobEffect;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        getEffectDuration(): number;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        static getAllEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        static tryGet(arg0: Internal.ItemLike_): Internal.SuspiciousEffectHolder;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get suspiciousEffect(): Internal.MobEffect
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get effectDuration(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        get allEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type WitherRoseBlock_ = WitherRoseBlock;
    interface Era extends Internal.TemporalAccessor, Internal.TemporalAdjuster {
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        getLong(arg0: Internal.TemporalField_): number;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        abstract getValue(): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        isSupported(arg0: Internal.TemporalField_): boolean;
        get value(): number
        (): number;
    }
    type Era_ = Era | (()=> number);
    class BoneMealItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static addGrowthParticles(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        static applyBonemeal(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        static growWaterPlant(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        /**
         * @deprecated
        */
        static growCrop(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly GRASS_COUNT_MULTIPLIER: (3) & (number);
        static readonly GRASS_SPREAD_WIDTH: (3) & (number);
        static readonly GRASS_SPREAD_HEIGHT: (1) & (number);
    }
    type BoneMealItem_ = BoneMealItem;
    class ClientboundSetDefaultSpawnPositionPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: BlockPos_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getPos(): BlockPos;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getAngle(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get pos(): BlockPos
        get angle(): number
    }
    type ClientboundSetDefaultSpawnPositionPacket_ = ClientboundSetDefaultSpawnPositionPacket;
    interface Key extends Internal.Serializable {
        abstract getAlgorithm(): string;
        abstract getFormat(): string;
        abstract getEncoded(): number[];
        get algorithm(): string
        get format(): string
        get encoded(): number[]
        /**
         * @deprecated
        */
        readonly serialVersionUID: (6603384152749567654) & (number);
    }
    type Key_ = Key;
    abstract class ForwardingSet <E> extends Internal.ForwardingCollection<E> implements Internal.Set<E> {
        getClass(): typeof any;
        abstract add(arg0: E): boolean;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        toString(): string;
        forEach(arg0: Internal.Consumer_<E>): void;
        notifyAll(): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        hashCode(): number;
        abstract size(): number;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(): Internal.Set<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type ForwardingSet_<E> = ForwardingSet<E>;
    interface Palette <T> {
        abstract read(arg0: Internal.FriendlyByteBuf_): void;
        abstract maybeHas(arg0: Internal.Predicate_<T>): boolean;
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        abstract valueFor(arg0: number): T;
        abstract getSerializedSize(): number;
        abstract getSize(): number;
        abstract idFor(arg0: T): number;
        abstract copy(): this;
        get serializedSize(): number
        get size(): number
    }
    type Palette_<T> = Palette<T>;
    class PlayerStatsJS {
        constructor(p: Internal.Player_, s: Internal.StatsCounter_)
        getClass(): typeof any;
        getDeaths(): number;
        getAnimalsBred(): number;
        getPlayerKills(): number;
        getTimeSinceRest(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getWalkDistance(): number;
        getDamageDealt(): number;
        getItemsDropped(item: Internal.Item_): number;
        add(stat: Internal.Stat_<any>, value: number): void;
        set(stat: Internal.Stat_<any>, value: number): void;
        getSprintDistance(): number;
        getBlocksMined(block: Internal.Block_): number;
        getPlayTime(): number;
        getMobKills(): number;
        getCrouchDistance(): number;
        getTimeCrouchTime(): number;
        getJumps(): number;
        toString(): string;
        getItemsCrafted(item: Internal.Item_): number;
        notifyAll(): void;
        getTimeSinceDeath(): number;
        getDamageAbsorbed(): number;
        getItemsUsed(item: Internal.Item_): number;
        getSwimDistance(): number;
        getItemsPickedUp(item: Internal.Item_): number;
        getDamageBlocked_by_shield(): number;
        getDamageResisted(): number;
        getItemsBroken(item: Internal.Item_): number;
        hashCode(): number;
        get(stat: Internal.Stat_<any>): number;
        getFishCaught(): number;
        getDamageTaken(): number;
        static statOf(o: any): Internal.Stat<any>;
        wait(): void;
        getDamageDealt_resisted(): number;
        wait(arg0: number): void;
        getKilled(entity: Internal.EntityType_<any>): number;
        equals(arg0: any): boolean;
        getKilledBy(entity: Internal.EntityType_<any>): number;
        getDamageDealt_absorbed(): number;
        get class(): typeof any
        get deaths(): number
        get animalsBred(): number
        get playerKills(): number
        get timeSinceRest(): number
        get walkDistance(): number
        get damageDealt(): number
        get sprintDistance(): number
        get playTime(): number
        get mobKills(): number
        get crouchDistance(): number
        get timeCrouchTime(): number
        get jumps(): number
        get timeSinceDeath(): number
        get damageAbsorbed(): number
        get swimDistance(): number
        get damageBlocked_by_shield(): number
        get damageResisted(): number
        get fishCaught(): number
        get damageTaken(): number
        get damageDealt_resisted(): number
        get damageDealt_absorbed(): number
        readonly player: Internal.Player;
    }
    type PlayerStatsJS_ = string | PlayerStatsJS;
    abstract class CollectionTag <T extends Internal.Tag> extends Internal.AbstractList<T> implements Internal.Tag {
        constructor()
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        "set(int,java.lang.Object)"(arg0: number, arg1: any): any;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        "add(int,java.lang.Object)"(arg0: number, arg1: any): void;
        abstract "add(int,net.minecraft.nbt.Tag)"(arg0: number, arg1: T): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        abstract "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        "remove(int)"(arg0: number): any;
        add(arg0: number, arg1: any): void;
        abstract sizeInBytes(): number;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        abstract setTag(arg0: number, arg1: Internal.Tag_): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract write(arg0: Internal.DataOutput_): void;
        add(arg0: T): boolean;
        subList(arg0: number, arg1: number): Internal.List<T>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        indexOf(arg0: any): number;
        addAll(arg0: number, arg1: Internal.Collection_<T>): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        abstract accept(arg0: Internal.TagVisitor_): void;
        abstract set(arg0: number, arg1: T): T;
        listIterator(): Internal.ListIterator<T>;
        abstract getType(): Internal.TagType<any>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<T>): void;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract copy(): Internal.Tag;
        wait(): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        parallelStream(): Internal.Stream<T>;
        abstract accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        sort(arg0: Internal.Comparator_<T>): void;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        set(arg0: number, arg1: any): any;
        abstract getElementType(): number;
        lastIndexOf(arg0: any): number;
        getClass(): typeof any;
        remove(arg0: number): any;
        abstract "set(int,net.minecraft.nbt.Tag)"(arg0: number, arg1: T): T;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        abstract addTag(arg0: number, arg1: Internal.Tag_): boolean;
        spliterator(): Internal.Spliterator<T>;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        abstract "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        abstract addAll(arg0: Internal.Collection_<T>): boolean;
        iterator(): Internal.Iterator<T>;
        abstract get(arg0: number): T;
        static of<E>(...arg0: E[]): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<T>): void;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        abstract add(arg0: number, arg1: T): void;
        abstract getId(): number;
        abstract contains(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        abstract toString(): string;
        removeIf(arg0: Internal.Predicate_<T>): boolean;
        stream(): Internal.Stream<T>;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        getAsString(): string;
        hashCode(): number;
        abstract size(): number;
        clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        listIterator(arg0: number): Internal.ListIterator<T>;
        get type(): Internal.TagType<any>
        get elementType(): number
        get class(): typeof any
        get empty(): boolean
        get id(): number
        get asString(): string
    }
    type CollectionTag_<T extends Internal.Tag> = CollectionTag<T>;
    class ServerboundSetStructureBlockPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: BlockPos_, arg1: Internal.StructureBlockEntity$UpdateType_, arg2: Internal.StructureMode_, arg3: string, arg4: BlockPos_, arg5: Vec3i_, arg6: Internal.Mirror_, arg7: Internal.Rotation_, arg8: string, arg9: boolean, arg10: boolean, arg11: boolean, arg12: number, arg13: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getClass(): typeof any;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getSeed(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getUpdateType(): Internal.StructureBlockEntity$UpdateType;
        getSize(): Vec3i;
        getPos(): BlockPos;
        isShowBoundingBox(): boolean;
        getMirror(): Internal.Mirror;
        getIntegrity(): number;
        getOffset(): BlockPos;
        getName(): string;
        getMode(): Internal.StructureMode;
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        isIgnoreEntities(): boolean;
        toString(): string;
        getData(): string;
        notifyAll(): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        getRotation(): Internal.Rotation;
        isShowAir(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get seed(): number
        get skippable(): boolean
        get updateType(): Internal.StructureBlockEntity$UpdateType
        get size(): Vec3i
        get pos(): BlockPos
        get showBoundingBox(): boolean
        get mirror(): Internal.Mirror
        get integrity(): number
        get offset(): BlockPos
        get name(): string
        get mode(): Internal.StructureMode
        get ignoreEntities(): boolean
        get data(): string
        get rotation(): Internal.Rotation
        get showAir(): boolean
    }
    type ServerboundSetStructureBlockPacket_ = ServerboundSetStructureBlockPacket;
    interface Object2BooleanFunction <K> extends it.unimi.dsi.fastutil.Function<K, boolean>, Internal.Predicate<K> {
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2BooleanFunction;
        test(arg0: K): boolean;
        and(arg0: Internal.Predicate_<K>): Internal.Predicate<K>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2BooleanFunction<T>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        removeBoolean(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Object2ByteFunction<K>;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Object2LongFunction<K>;
        or(arg0: Internal.Predicate_<K>): Internal.Predicate<K>;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        put(arg0: K, arg1: boolean): boolean;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2BooleanFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<K, T>;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Boolean)"(arg0: K, arg1: boolean): boolean;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: boolean): void;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2BooleanFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Object2IntFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, boolean>;
        containsKey(arg0: any): boolean;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Object2CharFunction<K>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2BooleanFunction<T>;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Object2FloatFunction<K>;
        apply(arg0: K): boolean;
        defaultReturnValue(): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2BooleanFunction;
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Object2ShortFunction<K>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Boolean)"(arg0: any, arg1: boolean): boolean;
        getOrDefault(arg0: any, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: boolean): boolean;
        abstract getBoolean(arg0: any): boolean;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2BooleanFunction;
        "getOrDefault(java.lang.Object,boolean)"(arg0: any, arg1: boolean): boolean;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2BooleanFunction;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2BooleanFunction;
        size(): number;
        negate(): Internal.Predicate<K>;
        clear(): void;
        "put(java.lang.Object,boolean)"(arg0: K, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        (arg0: any): boolean;
    }
    type Object2BooleanFunction_<K> = Object2BooleanFunction<K> | ((arg0: any)=> boolean);
    class Boat$Type extends Internal.Enum<Internal.Boat$Type> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getDeclaringClass(): typeof Internal.Boat$Type;
        getSerializedName(): string;
        getPlanks(): Internal.Block;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static byName(arg0: string): Internal.Boat$Type;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        getName(): string;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Boat$Type>>;
        static values(): Internal.Boat$Type[];
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        "compareTo(net.minecraft.world.entity.vehicle.Boat$Type)"(arg0: Internal.Boat$Type_): number;
        ordinal(): number;
        wait(): void;
        static byId(arg0: number): Internal.Boat$Type;
        compareTo(arg0: Internal.Boat$Type_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.Boat$Type;
        get class(): typeof any
        get declaringClass(): typeof Internal.Boat$Type
        get serializedName(): string
        get planks(): Internal.Block
        get name(): string
        static readonly DARK_OAK: (Internal.Boat$Type) & (Internal.Boat$Type);
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.Boat$Type>;
        static readonly SPRUCE: (Internal.Boat$Type) & (Internal.Boat$Type);
        static readonly MANGROVE: (Internal.Boat$Type) & (Internal.Boat$Type);
        static readonly JUNGLE: (Internal.Boat$Type) & (Internal.Boat$Type);
        static readonly BAMBOO: (Internal.Boat$Type) & (Internal.Boat$Type);
        static readonly OAK: (Internal.Boat$Type) & (Internal.Boat$Type);
        static readonly BIRCH: (Internal.Boat$Type) & (Internal.Boat$Type);
        static readonly CHERRY: (Internal.Boat$Type) & (Internal.Boat$Type);
        static readonly ACACIA: (Internal.Boat$Type) & (Internal.Boat$Type);
    }
    type Boat$Type_ = "jungle" | "bamboo" | "mangrove" | Boat$Type | "oak" | "dark_oak" | "cherry" | "acacia" | "spruce" | "birch";
    class BrushItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        spawnDustParticles(arg0: Internal.Level_, arg1: Internal.BlockHitResult_, arg2: Internal.BlockState_, arg3: Vec3d_, arg4: Internal.HumanoidArm_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly ANIMATION_DURATION: (10) & (number);
    }
    type BrushItem_ = BrushItem;
    interface TemporalUnit {
        abstract between(arg0: Internal.Temporal_, arg1: Internal.Temporal_): number;
        abstract isTimeBased(): boolean;
        abstract addTo<R extends Internal.Temporal>(arg0: R, arg1: number): R;
        abstract toString(): string;
        abstract getDuration(): Duration;
        abstract isDateBased(): boolean;
        isSupportedBy(arg0: Internal.Temporal_): boolean;
        abstract isDurationEstimated(): boolean;
        get timeBased(): boolean
        get duration(): Duration
        get dateBased(): boolean
        get durationEstimated(): boolean
    }
    type TemporalUnit_ = TemporalUnit;
    interface Spliterator$OfDouble extends Internal.Spliterator$OfPrimitive<number, Internal.DoubleConsumer, Internal.Spliterator$OfDouble> {
        "tryAdvance(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): boolean;
        forEachRemaining(arg0: any): void;
        "forEachRemaining(java.util.function.DoubleConsumer)"(arg0: Internal.DoubleConsumer_): void;
        hasCharacteristics(arg0: number): boolean;
        abstract "tryAdvance(java.util.function.DoubleConsumer)"(arg0: Internal.DoubleConsumer_): boolean;
        abstract estimateSize(): number;
        getComparator(): Internal.Comparator<number>;
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        trySplit(): Internal.Spliterator$OfPrimitive<any, any, any>;
        "tryAdvance(java.lang.Object)"(arg0: any): boolean;
        getExactSizeIfKnown(): number;
        forEachRemaining(arg0: Internal.DoubleConsumer_): void;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        tryAdvance(arg0: any): boolean;
        abstract characteristics(): number;
        abstract tryAdvance(arg0: Internal.DoubleConsumer_): boolean;
        get comparator(): Internal.Comparator<number>
        get exactSizeIfKnown(): number
    }
    type Spliterator$OfDouble_ = Spliterator$OfDouble;
    abstract class AbstractContainerScreen <T extends Internal.AbstractContainerMenu> extends Internal.Screen implements Internal.MenuAccess<T> {
        constructor(arg0: T, arg1: Internal.Inventory_, arg2: Internal.Component_)
        afterMouseAction(): void;
        charTyped(arg0: string, arg1: number): boolean;
        onFilesDrop(arg0: Internal.List_<Internal.Path>): void;
        "setFocused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_): void;
        getMinecraft(): Internal.Minecraft;
        getGuiLeft(): number;
        narrationEnabled(): void;
        setFocused(arg0: boolean): void;
        static getTooltipFromItem(arg0: Internal.Minecraft_, arg1: Internal.ItemStack_): Internal.List<Internal.Component>;
        renderDirtBackground(arg0: Internal.GuiGraphics_): void;
        setTooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getSlotUnderMouse(): Internal.Slot;
        renderWithTooltip(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        static isCut(arg0: number): boolean;
        addRenderableWidget<T extends Internal.GuiEventListener & Internal.Renderable & Internal.NarratableEntry>(arg0: T): T;
        afterMouseMove(): void;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        getFocused(): Internal.GuiEventListener;
        "setTooltipForNextRenderPass(java.util.List,net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner,boolean)"(arg0: Internal.List_<Internal.FormattedCharSequence>, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        static isCopy(arg0: number): boolean;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        clearDraggingState(): void;
        handleComponentClicked(arg0: Internal.Style_): boolean;
        tick(): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        static findNarratableWidget(arg0: Internal.List_<Internal.NarratableEntry>, arg1: Internal.NarratableEntry_): Internal.Screen$NarratableSearchResult;
        isPauseScreen(): boolean;
        getGuiTop(): number;
        getYSize(): number;
        setDragging(arg0: boolean): void;
        removed(): void;
        wait(): void;
        children(): Internal.List<Internal.GuiEventListener>;
        getTitle(): Internal.Component;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        addRenderableOnly<T extends Internal.Renderable>(arg0: T): T;
        static isSelectAll(arg0: number): boolean;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        static renderSlotHighlight(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        shouldCloseOnEsc(): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        static hasAltDown(): boolean;
        renderBackground(arg0: Internal.GuiGraphics_): void;
        getTabOrderGroup(): number;
        setFocused(arg0: Internal.GuiEventListener_): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        onClose(): void;
        addWidget<T extends Internal.GuiEventListener & Internal.NarratableEntry>(arg0: T): T;
        static renderSlotHighlight(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        static hasShiftDown(): boolean;
        init(arg0: Internal.Minecraft_, arg1: number, arg2: number): void;
        getBackgroundMusic(): Internal.Music;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getNarrationMessage(): Internal.Component;
        getMenu(): T;
        "setTooltipForNextRenderPass(net.minecraft.client.gui.components.Tooltip,net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner,boolean)"(arg0: Internal.Tooltip_, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        toString(): string;
        notifyAll(): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        resize(arg0: Internal.Minecraft_, arg1: number, arg2: number): void;
        static isPaste(arg0: number): boolean;
        "setFocused(boolean)"(arg0: boolean): void;
        setTooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        static hasControlDown(): boolean;
        afterKeyboardAction(): void;
        getXSize(): number;
        hashCode(): number;
        getCurrentFocusPath(): Internal.ComponentPath;
        getSlotColor(arg0: number): number;
        added(): void;
        wait(arg0: number): void;
        handleDelayedNarration(): void;
        static wrapScreenError(arg0: Internal.Runnable_, arg1: string, arg2: string): void;
        equals(arg0: any): boolean;
        triggerImmediateNarration(arg0: boolean): void;
        setTooltipForNextRenderPass(arg0: Internal.Tooltip_, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        set "focused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_)
        get minecraft(): Internal.Minecraft
        get guiLeft(): number
        set focused(arg0: boolean)
        set tooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>)
        get slotUnderMouse(): Internal.Slot
        get rectangle(): Internal.ScreenRectangle
        get focused(): Internal.GuiEventListener
        get pauseScreen(): boolean
        get guiTop(): number
        get YSize(): number
        set dragging(arg0: boolean)
        get title(): Internal.Component
        get dragging(): boolean
        get class(): typeof any
        get focused(): boolean
        get tabOrderGroup(): number
        set focused(arg0: Internal.GuiEventListener_)
        get backgroundMusic(): Internal.Music
        get narrationMessage(): Internal.Component
        get menu(): T
        set "focused(boolean)"(arg0: boolean)
        get XSize(): number
        get currentFocusPath(): Internal.ComponentPath
        static readonly SLOT_ITEM_BLIT_OFFSET: (100) & (number);
        static readonly INVENTORY_LOCATION: (ResourceLocation) & (ResourceLocation);
    }
    type AbstractContainerScreen_<T extends Internal.AbstractContainerMenu> = AbstractContainerScreen<T>;
    interface Short2ShortFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2ShortFunction<T>;
        "getOrDefault(short,short)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Short2LongFunction;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Short2CharFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        "containsKey(short)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Short)"(arg0: number, arg1: number): number;
        defaultReturnValue(): number;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Short2DoubleFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        abstract get(arg0: number): number;
        identity(): this;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        put(arg0: number, arg1: number): number;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        containsKey(arg0: number): boolean;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2ShortFunction;
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Short2IntFunction;
        abstract "get(short)"(arg0: number): number;
        "remove(short)"(arg0: number): number;
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Short)"(arg0: any, arg1: number): number;
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Short2FloatFunction;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2ShortFunction;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2ShortFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        remove(arg0: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2ShortFunction;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2ShortFunction;
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2ShortFunction;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        "put(short,short)"(arg0: number, arg1: number): number;
        clear(): void;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2ShortFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
    }
    type Short2ShortFunction_ = Short2ShortFunction;
    interface Int2DoubleFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<number, number> {
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        abstract "get(int)"(arg0: number): number;
        containsKey(arg0: number): boolean;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Double)"(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Integer,java.lang.Double)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Int2IntFunction;
        getOrDefault(arg0: number, arg1: number): number;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2DoubleFunction<T>;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2DoubleFunction;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Int2ByteFunction;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2DoubleFunction;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        defaultReturnValue(): number;
        "containsKey(int)"(arg0: number): boolean;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Int2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        "getOrDefault(int,double)"(arg0: number, arg1: number): number;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2DoubleFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "put(int,double)"(arg0: number, arg1: number): number;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2DoubleFunction;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2DoubleFunction;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2DoubleFunction;
        abstract get(arg0: number): number;
        "remove(int)"(arg0: number): number;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Int2FloatFunction;
        size(): number;
        put(arg0: number, arg1: number): number;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        clear(): void;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2DoubleFunction<T>;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Int2LongFunction;
    }
    type Int2DoubleFunction_ = Int2DoubleFunction;
    class Display$RenderState extends Internal.Record {
        constructor(arg0: Internal.Display$GenericInterpolator_<Internal.Transformation>, arg1: Internal.Display$BillboardConstraints_, arg2: number, arg3: Internal.Display$FloatInterpolator_, arg4: Internal.Display$FloatInterpolator_, arg5: number)
        getClass(): typeof any;
        brightnessOverride(): number;
        toString(): string;
        transformation(): Internal.Display$GenericInterpolator<Internal.Transformation>;
        notifyAll(): void;
        shadowRadius(): Internal.Display$FloatInterpolator;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        shadowStrength(): Internal.Display$FloatInterpolator;
        glowColorOverride(): number;
        billboardConstraints(): Internal.Display$BillboardConstraints;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Display$RenderState_ = Display$RenderState;
    interface BidirectionalIterator <K> extends Internal.Iterator<K> {
        abstract hasPrevious(): boolean;
        remove(): void;
        abstract next(): K;
        abstract hasNext(): boolean;
        forEachRemaining(arg0: Internal.Consumer_<K>): void;
        abstract previous(): K;
    }
    type BidirectionalIterator_<K> = BidirectionalIterator<K>;
    interface Stream$Builder <T> extends Internal.Consumer<T> {
        andThen(arg0: Internal.Consumer_<T>): Internal.Consumer<T>;
        add(arg0: T): this;
        abstract build(): Internal.Stream<T>;
        abstract accept(arg0: T): void;
    }
    type Stream$Builder_<T> = Stream$Builder<T>;
}
