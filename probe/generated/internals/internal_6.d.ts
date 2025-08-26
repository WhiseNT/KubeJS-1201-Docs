/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface IEventHandler {
        abstract onEvent(arg0: Internal.EventJS_): any;
        (arg0: Internal.EventJS): any;
    }
    type IEventHandler_ = ((arg0: Internal.EventJS)=> any) | IEventHandler;
    interface RecipeComponentFactory extends Internal.CustomJavaToJsWrapper {
        convertJavaToJs(cx: Internal.Context_, scope: Internal.Scriptable_, staticType: typeof any): Internal.Scriptable;
        abstract create(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: Internal.Map_<string, any>): Internal.RecipeComponent<any>;
        (arg0: Internal.Context, arg1: Internal.Scriptable, arg2: Internal.Map<string, any>): Internal.RecipeComponent_<any>;
    }
    type RecipeComponentFactory_ = RecipeComponentFactory | ((arg0: Internal.Context, arg1: Internal.Scriptable, arg2: Internal.Map<string, any>)=> Internal.RecipeComponent_<any>);
    class ImmutableMultiset$Builder <E> extends Internal.ImmutableCollection$Builder<E> {
        constructor()
        add(arg0: any[]): Internal.ImmutableCollection$Builder<any>;
        getClass(): typeof any;
        toString(): string;
        "add(java.lang.Object[])"(arg0: any[]): Internal.ImmutableCollection$Builder<any>;
        notifyAll(): void;
        add(arg0: E): this;
        build(): Internal.ImmutableMultiset<E>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "addAll(java.util.Iterator)"(arg0: Internal.Iterator_<any>): Internal.ImmutableCollection$Builder<any>;
        "add(java.lang.Object)"(arg0: E): this;
        hashCode(): number;
        wait(): void;
        addAll(arg0: Internal.Iterator_<any>): Internal.ImmutableCollection$Builder<any>;
        "addAll(java.lang.Iterable)"(arg0: Internal.Iterable_<any>): Internal.ImmutableCollection$Builder<any>;
        addCopies(arg0: E, arg1: number): this;
        wait(arg0: number): void;
        setCount(arg0: E, arg1: number): this;
        equals(arg0: any): boolean;
        addAll(arg0: Internal.Iterable_<any>): Internal.ImmutableCollection$Builder<any>;
        get class(): typeof any
    }
    type ImmutableMultiset$Builder_<E> = ImmutableMultiset$Builder<E>;
    class ShapelessRecipe implements Internal.CraftingRecipe {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CraftingBookCategory_, arg3: Internal.ItemStack_, arg4: Internal.NonNullList_<Internal.Ingredient>)
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
        readonly ingredients: Internal.NonNullList<Internal.Ingredient>;
        readonly result: Internal.ItemStack;
        readonly group: string;
    }
    type ShapelessRecipe_ = ShapelessRecipe;
    abstract class PalettedContainer$Strategy {
        getClass(): typeof any;
        size(): number;
        hashCode(): number;
        abstract getConfiguration<A>(arg0: Internal.IdMap_<A>, arg1: number): Internal.PalettedContainer$Configuration<A>;
        toString(): string;
        getIndex(arg0: number, arg1: number, arg2: number): number;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly HASHMAP_PALETTE_FACTORY: Internal.Palette$Factory;
        static readonly LINEAR_PALETTE_FACTORY: Internal.Palette$Factory;
        static readonly SINGLE_VALUE_PALETTE_FACTORY: Internal.Palette$Factory;
        static readonly SECTION_BIOMES: Internal.PalettedContainer$Strategy;
        static readonly SECTION_STATES: Internal.PalettedContainer$Strategy;
    }
    type PalettedContainer$Strategy_ = PalettedContainer$Strategy;
    class LootContextParam <T> {
        constructor(arg0: ResourceLocation_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        getName(): ResourceLocation;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get name(): ResourceLocation
    }
    type LootContextParam_<T> = LootContextParam<T>;
    abstract class StateTestingPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static "matchesBlocks(java.util.List)"(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        notify(): void;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        abstract type(): Internal.BlockPredicateType<any>;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(): void;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        test(arg0: any, arg1: any): boolean;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getClass(): typeof any;
        static "matchesFluids(net.minecraft.core.Vec3i,net.minecraft.world.level.material.Fluid[])"(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number, arg1: number): void;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,net.minecraft.world.level.block.Block[])"(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(net.minecraft.world.level.WorldGenLevel,net.minecraft.core.BlockPos)"(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        toString(): string;
        notifyAll(): void;
        static "matchesFluids(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        hashCode(): number;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number): void;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        equals(arg0: any): boolean;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        get class(): typeof any
    }
    type StateTestingPredicate_ = StateTestingPredicate;
    interface ItemEntityKJS extends Internal.EntityKJS {
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        getTicksUntilDespawn(): number;
        setNoPickUpDelay(): void;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isAmbientCreature(): boolean;
        setTicksUntilDespawn(ticks: number): void;
        isMonster(): boolean;
        isOnScoreboardTeam(teamId: string): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        isLiving(): boolean;
        setDefaultPickUpDelay(): void;
        getLifespan(): number;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setInfinitePickUpDelay(): void;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        attack(hp: number): void;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPersistentData(): Internal.CompoundTag;
        setNoDespawn(): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setLifespan(lifespan: number): void;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ticksUntilDespawn(): number
        get ambientCreature(): boolean
        set ticksUntilDespawn(ticks: number)
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get lifespan(): number
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get facing(): Internal.Direction
        get scriptType(): Internal.ScriptType
        get motionX(): number
        get waterCreature(): boolean
        get persistentData(): Internal.CompoundTag
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        set lifespan(lifespan: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type ItemEntityKJS_ = ItemEntityKJS;
    class BanDetails extends Internal.Record {
        constructor(id: Internal.UUID_, expires: Internal.Instant_, reason: string, reasonMessage: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        reason(): string;
        hashCode(): number;
        id(): Internal.UUID;
        wait(): void;
        expires(): Internal.Instant;
        wait(arg0: number): void;
        reasonMessage(): string;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly MULTIPLAYER_SCOPE: ("MULTIPLAYER") & (string);
    }
    type BanDetails_ = BanDetails;
    class GameRules$Type <T extends Internal.GameRules$Value<T>> {
        getClass(): typeof any;
        callVisitor(arg0: Internal.GameRules$GameRuleTypeVisitor_, arg1: Internal.GameRules$Key_<T>): void;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        createRule(): T;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        createArgument(arg0: string): Internal.RequiredArgumentBuilder<Internal.CommandSourceStack, any>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type GameRules$Type_<T extends Internal.GameRules$Value<T>> = GameRules$Type<T>;
    interface ChannelFuture extends io.netty.util.concurrent.Future<void> {
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract isSuccess(): boolean;
        abstract await(): this;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>): this;
        abstract getNow(): void;
        abstract channel(): io.netty.channel.Channel;
        abstract cause(): Internal.Throwable;
        abstract isVoid(): boolean;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract isCancellable(): boolean;
        abstract syncUninterruptibly(): this;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<void>>[]): this;
        abstract sync(): this;
        abstract awaitUninterruptibly(): this;
        abstract get(): void;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): void;
        abstract isCancelled(): boolean;
        get success(): boolean
        get done(): boolean
        get now(): void
        get "void"(): boolean
        get cancellable(): boolean
        get cancelled(): boolean
    }
    type ChannelFuture_ = ChannelFuture;
    class BeeDebugRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor(arg0: Internal.Minecraft_)
        getClass(): typeof any;
        toString(): string;
        removeBeeInfo(arg0: number): void;
        addOrUpdateBeeInfo(arg0: Internal.BeeDebugRenderer$BeeInfo_): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addOrUpdateHiveInfo(arg0: Internal.BeeDebugRenderer$HiveInfo_): void;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type BeeDebugRenderer_ = BeeDebugRenderer;
    abstract class HitResult {
        getClass(): typeof any;
        hashCode(): number;
        distanceTo(arg0: Internal.Entity_): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getLocation(): Vec3d;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract getType(): Internal.HitResult$Type;
        get class(): typeof any
        get location(): Vec3d
        get type(): Internal.HitResult$Type
    }
    type HitResult_ = HitResult;
    interface Float2ObjectFunction <V> extends Internal.DoubleFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        "apply(java.lang.Float)"(arg0: number): V;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2ObjectFunction<V>;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2ObjectFunction<V>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        getOrDefault(arg0: number, arg1: V): V;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2ObjectFunction<V>;
        "containsKey(float)"(arg0: number): boolean;
        "getOrDefault(float,java.lang.Object)"(arg0: number, arg1: V): V;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2ObjectFunction<V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Float2ByteFunction;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        abstract get(arg0: number): V;
        apply(arg0: number): V;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Float2LongFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        defaultReturnValue(): V;
        put(arg0: number, arg1: V): V;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2ObjectFunction<V>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Float2FloatFunction;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        "apply(double)"(arg0: number): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Float2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Float2IntFunction;
        "put(float,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "put(java.lang.Float,java.lang.Object)"(arg0: number, arg1: V): V;
        abstract "get(float)"(arg0: number): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Float2ObjectFunction<T>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Float2ShortFunction;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Float2DoubleFunction;
        size(): number;
        "remove(float)"(arg0: number): V;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2ObjectFunction<V>;
        clear(): void;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Float2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
    }
    type Float2ObjectFunction_<V> = Float2ObjectFunction<V>;
    class DateFormatSymbols implements Internal.Cloneable, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Locale_)
        clone(): any;
        getShortWeekdays(): string[];
        getClass(): typeof any;
        static getInstance(arg0: Internal.Locale_): Internal.DateFormatSymbols;
        setMonths(arg0: string[]): void;
        getWeekdays(): string[];
        static getAvailableLocales(): Internal.Locale[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setWeekdays(arg0: string[]): void;
        setZoneStrings(arg0: string[][]): void;
        getEras(): string[];
        setShortWeekdays(arg0: string[]): void;
        static getInstance(): Internal.DateFormatSymbols;
        getMonths(): string[];
        getLocalPatternChars(): string;
        toString(): string;
        getShortMonths(): string[];
        notifyAll(): void;
        setEras(arg0: string[]): void;
        getAmPmStrings(): string[];
        setShortMonths(arg0: string[]): void;
        setLocalPatternChars(arg0: string): void;
        setAmPmStrings(arg0: string[]): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getZoneStrings(): string[][];
        get shortWeekdays(): string[]
        get class(): typeof any
        set months(arg0: string[])
        get weekdays(): string[]
        get availableLocales(): Internal.Locale[]
        set weekdays(arg0: string[])
        set zoneStrings(arg0: string[][])
        get eras(): string[]
        set shortWeekdays(arg0: string[])
        get instance(): Internal.DateFormatSymbols
        get months(): string[]
        get localPatternChars(): string
        get shortMonths(): string[]
        set eras(arg0: string[])
        get amPmStrings(): string[]
        set shortMonths(arg0: string[])
        set localPatternChars(arg0: string)
        set amPmStrings(arg0: string[])
        get zoneStrings(): string[][]
    }
    type DateFormatSymbols_ = DateFormatSymbols;
    class StonecutterBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
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
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
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
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
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
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        notify(): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
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
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
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
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        /**
         * @deprecated
        */
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
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
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
        /**
         * @deprecated
        */
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
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
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
    }
    type StonecutterBlock_ = StonecutterBlock;
    class CreativeModeTab$TabVisibility extends Internal.Enum<Internal.CreativeModeTab$TabVisibility> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        compareTo(arg0: Internal.CreativeModeTab$TabVisibility_): number;
        getDeclaringClass(): typeof Internal.CreativeModeTab$TabVisibility;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.CreativeModeTab$TabVisibility[];
        name(): string;
        hashCode(): number;
        "compareTo(net.minecraft.world.item.CreativeModeTab$TabVisibility)"(arg0: Internal.CreativeModeTab$TabVisibility_): number;
        static valueOf(arg0: string): Internal.CreativeModeTab$TabVisibility;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CreativeModeTab$TabVisibility>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.CreativeModeTab$TabVisibility
        static readonly PARENT_TAB_ONLY: (Internal.CreativeModeTab$TabVisibility) & (Internal.CreativeModeTab$TabVisibility);
        static readonly SEARCH_TAB_ONLY: (Internal.CreativeModeTab$TabVisibility) & (Internal.CreativeModeTab$TabVisibility);
        static readonly PARENT_AND_SEARCH_TABS: (Internal.CreativeModeTab$TabVisibility) & (Internal.CreativeModeTab$TabVisibility);
    }
    type CreativeModeTab$TabVisibility_ = CreativeModeTab$TabVisibility | "parent_and_search_tabs" | "parent_tab_only" | "search_tab_only";
    class EntryGroup$Builder extends Internal.LootPoolEntryContainer$Builder<Internal.EntryGroup$Builder> {
        constructor(...arg0: Internal.LootPoolEntryContainer$Builder_<any>[])
        getClass(): typeof any;
        otherwise(arg0: Internal.LootPoolEntryContainer$Builder_<any>): Internal.AlternativesEntry$Builder;
        when<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemCondition$Builder>): this;
        toString(): string;
        notifyAll(): void;
        then(arg0: Internal.LootPoolEntryContainer$Builder_<any>): Internal.SequentialEntry$Builder;
        unwrap(): Internal.ConditionUserBuilder<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        build(): Internal.LootPoolEntryContainer;
        hashCode(): number;
        when(arg0: Internal.LootItemCondition$Builder_): Internal.ConditionUserBuilder<any>;
        wait(): void;
        append(arg0: Internal.LootPoolEntryContainer$Builder_<any>): this;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type EntryGroup$Builder_ = EntryGroup$Builder;
    abstract class DirectionalBlock extends Internal.Block {
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
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
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
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
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
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
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        notify(): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
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
        /**
         * @deprecated
        */
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
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        /**
         * @deprecated
        */
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
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
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
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
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
    }
    type DirectionalBlock_ = DirectionalBlock;
    interface VillagerDataHolder extends Internal.VariantHolder<Internal.VillagerType> {
        abstract setVillagerData(arg0: Internal.VillagerData_): void;
        abstract getVillagerData(): Internal.VillagerData;
        "setVariant(java.lang.Object)"(arg0: any): void;
        "setVariant(net.minecraft.world.entity.npc.VillagerType)"(arg0: Internal.VillagerType_): void;
        setVariant(arg0: any): void;
        getVariant(): any;
        setVariant(arg0: Internal.VillagerType_): void;
        set villagerData(arg0: Internal.VillagerData_)
        get villagerData(): Internal.VillagerData
        set "variant(java.lang.Object)"(arg0: any)
        set "variant(net.minecraft.world.entity.npc.VillagerType)"(arg0: Internal.VillagerType_)
        set variant(arg0: any)
        get variant(): any
        set variant(arg0: Internal.VillagerType_)
    }
    type VillagerDataHolder_ = VillagerDataHolder;
    class LastSeenMessages$Update extends Internal.Record {
        constructor(arg0: number, arg1: Internal.BitSet_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getClass(): typeof any;
        hashCode(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        offset(): number;
        wait(arg0: number, arg1: number): void;
        acknowledged(): Internal.BitSet;
        get class(): typeof any
    }
    type LastSeenMessages$Update_ = LastSeenMessages$Update;
    class MultiShotEnchantment extends Internal.Enchantment {
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
        checkCompatibility(arg0: Internal.Enchantment_): boolean;
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
    type MultiShotEnchantment_ = MultiShotEnchantment;
    class ClientboundPlayerInfoUpdatePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.EnumSet_<Internal.ClientboundPlayerInfoUpdatePacket$Action>, arg1: Internal.Collection_<Internal.ServerPlayer>)
        constructor(arg0: Internal.ClientboundPlayerInfoUpdatePacket$Action_, arg1: Internal.ServerPlayer_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        static createPlayerInitializing(arg0: Internal.Collection_<Internal.ServerPlayer>): Internal.ClientboundPlayerInfoUpdatePacket;
        toString(): string;
        actions(): Internal.EnumSet<Internal.ClientboundPlayerInfoUpdatePacket$Action>;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        newEntries(): Internal.List<Internal.ClientboundPlayerInfoUpdatePacket$Entry>;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        entries(): Internal.List<Internal.ClientboundPlayerInfoUpdatePacket$Entry>;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundPlayerInfoUpdatePacket_ = ClientboundPlayerInfoUpdatePacket;
    class SignableCommand$Argument <S> extends Internal.Record {
        constructor(arg0: Internal.ArgumentCommandNode_<S, any>, arg1: string)
        name(): string;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        node(): Internal.ArgumentCommandNode<S, any>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        value(): string;
        get class(): typeof any
    }
    type SignableCommand$Argument_<S> = SignableCommand$Argument<S>;
    interface Byte2BooleanFunction extends it.unimi.dsi.fastutil.Function<number, boolean>, Internal.IntPredicate {
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Byte2ShortFunction;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        or(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        remove(arg0: number): boolean;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "getOrDefault(byte,boolean)"(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): boolean;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2BooleanFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<number, T>;
        put(arg0: number, arg1: boolean): boolean;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Byte2CharFunction;
        abstract "get(byte)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Byte2FloatFunction;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2BooleanFunction;
        apply(arg0: number): boolean;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: boolean): void;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2BooleanFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, boolean>;
        "containsKey(byte)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        negate(): Internal.IntPredicate;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        /**
         * @deprecated
        */
        "put(java.lang.Byte,java.lang.Boolean)"(arg0: number, arg1: boolean): boolean;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2BooleanFunction;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Byte2ByteFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: boolean): boolean;
        containsKey(arg0: number): boolean;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Byte2IntFunction;
        defaultReturnValue(): boolean;
        and(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        abstract get(arg0: number): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Boolean)"(arg0: any, arg1: boolean): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2BooleanFunction;
        "remove(byte)"(arg0: number): boolean;
        size(): number;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Byte2LongFunction;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2BooleanFunction<T>;
        clear(): void;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2BooleanFunction<T>;
        "put(byte,boolean)"(arg0: number, arg1: boolean): boolean;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2BooleanFunction;
    }
    type Byte2BooleanFunction_ = Byte2BooleanFunction;
    class ZonedDateTime implements Internal.ChronoZonedDateTime<Internal.LocalDate>, Internal.Temporal, Internal.Serializable {
        getMonth(): Internal.Month;
        toLocalTime(): Internal.LocalTime;
        withDayOfMonth(arg0: number): this;
        toInstant(): Internal.Instant;
        static ofLocal(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneId_, arg2: Internal.ZoneOffset_): Internal.ZonedDateTime;
        withZoneSameLocal(arg0: Internal.ZoneId_): this;
        getDayOfMonth(): number;
        withDayOfYear(arg0: number): this;
        minusDays(arg0: number): this;
        compareTo(arg0: Internal.ChronoZonedDateTime_<any>): number;
        "isSupported(java.time.temporal.TemporalField)"(arg0: Internal.TemporalField_): boolean;
        minusSeconds(arg0: number): this;
        getYear(): number;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.ZonedDateTime;
        static now(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        "compareTo(java.lang.Object)"(arg0: any): number;
        toEpochSecond(): number;
        getMonthValue(): number;
        getClass(): typeof any;
        withEarlierOffsetAtOverlap(): this;
        static from(arg0: Internal.TemporalAccessor_): Internal.ZonedDateTime;
        plusMonths(arg0: number): this;
        minusNanos(arg0: number): this;
        static now(): Internal.ZonedDateTime;
        plusNanos(arg0: number): this;
        getZone(): Internal.ZoneId;
        getLong(arg0: Internal.TemporalField_): number;
        static timeLineOrder(): Internal.Comparator<Internal.ChronoZonedDateTime<any>>;
        withHour(arg0: number): this;
        minusHours(arg0: number): this;
        getOffset(): Internal.ZoneOffset;
        toString(): string;
        notifyAll(): void;
        static of(arg0: Internal.LocalDate_, arg1: Internal.LocalTime_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        getSecond(): number;
        getNano(): number;
        toLocalDateTime(): Internal.ChronoLocalDateTime<any>;
        minusYears(arg0: number): this;
        "with"(arg0: Internal.TemporalField_, arg1: number): Internal.ChronoZonedDateTime<any>;
        minus(arg0: number, arg1: Internal.TemporalUnit_): Internal.ChronoZonedDateTime<any>;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        wait(arg0: number): void;
        plusWeeks(arg0: number): this;
        minus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        withZoneSameInstant(arg0: Internal.ZoneId_): Internal.ChronoZonedDateTime<any>;
        getHour(): number;
        isAfter(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        getDayOfWeek(): Internal.DayOfWeek;
        static "now(java.time.Clock)"(arg0: Internal.Clock_): Internal.ZonedDateTime;
        notify(): void;
        withMonth(arg0: number): this;
        compareTo(arg0: any): number;
        withMinute(arg0: number): this;
        getMinute(): number;
        withLaterOffsetAtOverlap(): Internal.ChronoZonedDateTime<any>;
        minusWeeks(arg0: number): this;
        withFixedOffsetZone(): this;
        plusSeconds(arg0: number): this;
        plusMinutes(arg0: number): this;
        plusYears(arg0: number): this;
        plusDays(arg0: number): this;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ZoneId_): Internal.ZonedDateTime;
        withYear(arg0: number): this;
        static ofStrict(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        getChronology(): Internal.Chronology;
        isBefore(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        wait(): void;
        minusMonths(arg0: number): this;
        static "now(java.time.ZoneId)"(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        "isSupported(java.time.temporal.TemporalUnit)"(arg0: Internal.TemporalUnit_): boolean;
        withSecond(arg0: number): this;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.ZonedDateTime;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        static of(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneId_): Internal.ZonedDateTime;
        toLocalDate(): Internal.LocalDate;
        wait(arg0: number, arg1: number): void;
        static ofInstant(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        "compareTo(java.time.chrono.ChronoZonedDateTime)"(arg0: Internal.ChronoZonedDateTime_<any>): number;
        withNano(arg0: number): this;
        getDayOfYear(): number;
        isEqual(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        minusMinutes(arg0: number): this;
        plus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        plusHours(arg0: number): this;
        static parse(arg0: Internal.CharSequence_): Internal.ZonedDateTime;
        hashCode(): number;
        static now(arg0: Internal.Clock_): Internal.ZonedDateTime;
        toOffsetDateTime(): Internal.OffsetDateTime;
        equals(arg0: any): boolean;
        get month(): Internal.Month
        get dayOfMonth(): number
        get year(): number
        get monthValue(): number
        get class(): typeof any
        get zone(): Internal.ZoneId
        get offset(): Internal.ZoneOffset
        get second(): number
        get nano(): number
        get hour(): number
        get dayOfWeek(): Internal.DayOfWeek
        get minute(): number
        get chronology(): Internal.Chronology
        get dayOfYear(): number
    }
    type ZonedDateTime_ = ZonedDateTime;
    interface IForgeGuiGraphics {
        blitWithBorder(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getColorFromFormattingCharacter(arg0: string, arg1: boolean): number;
        blitInscribed(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number): void;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        blitNineSlicedSized(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitWithBorder(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitInscribed(arg0: ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        readonly UNDO_CHAR: ("↶") & (string);
        readonly DEFAULT_BORDER_COLOR_END: (1344798847) & (number);
        readonly DEFAULT_BORDER_COLOR_START: (1347420415) & (number);
        readonly RESET_CHAR: ("☄") & (string);
        readonly TEXT_COLOR_CODES: number[];
        readonly INVALID: ("✕") & (string);
        readonly DEFAULT_BACKGROUND_COLOR: (-267386864) & (number);
        readonly VALID: ("✔") & (string);
    }
    type IForgeGuiGraphics_ = IForgeGuiGraphics;
    abstract class Record {
        getClass(): typeof any;
        abstract hashCode(): number;
        abstract toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        abstract equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type Record_ = Record;
    abstract class ModelEvent extends Internal.Event {
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
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ModelEvent_ = ModelEvent;
    class BeehiveBlock extends Internal.BaseEntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        resetHoneyLevel(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        releaseBeesAndResetHoneyLevel(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.BeehiveBlockEntity$BeeReleaseStatus_): void;
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
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
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
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static dropHoneycomb(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        static readonly MAX_HONEY_LEVELS: (5) & (number);
        static readonly HONEY_LEVEL: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type BeehiveBlock_ = BeehiveBlock;
    class DoubleHighBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
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
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
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
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
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
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
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
        get block(): Internal.Block
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
    type DoubleHighBlockItem_ = DoubleHighBlockItem;
    abstract class SpreadingSnowyDirtBlock extends Internal.SnowyDirtBlock {
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
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
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
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
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
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
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
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
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        notify(): void;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
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
        /**
         * @deprecated
        */
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
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        /**
         * @deprecated
        */
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
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
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
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
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
    }
    type SpreadingSnowyDirtBlock_ = SpreadingSnowyDirtBlock;
    class PackOutput {
        constructor(arg0: Internal.Path_)
        getOutputFolder(arg0: Internal.PackOutput$Target_): Internal.Path;
        getOutputFolder(): Internal.Path;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        createPathProvider(arg0: Internal.PackOutput$Target_, arg1: string): Internal.PackOutput$PathProvider;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get outputFolder(): Internal.Path
        get class(): typeof any
    }
    type PackOutput_ = PackOutput;
    interface SuspiciousEffectHolder {
        abstract getEffectDuration(): number;
        abstract getSuspiciousEffect(): Internal.MobEffect;
        getAllEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>;
        tryGet(arg0: Internal.ItemLike_): this;
        get effectDuration(): number
        get suspiciousEffect(): Internal.MobEffect
        get allEffectHolders(): Internal.List<Internal.SuspiciousEffectHolder>
    }
    type SuspiciousEffectHolder_ = SuspiciousEffectHolder;
    class RegistryEventJS <T> extends Internal.StartupEventJS {
        constructor(r: Internal.RegistryInfo_<T>)
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
        notifyAll(): void;
        /**
         * @deprecated
        */
        custom(id: string, object: any): Internal.CustomBuilderObject;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        create(id: string): Internal.BuilderBase<T>;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        create(id: string, type: string): Internal.BuilderBase<T>;
        hashCode(): number;
        wait(): void;
        createCustom(id: string, object: Internal.Supplier_<any>): Internal.CustomBuilderObject;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        get class(): typeof any
        readonly created: Internal.List<Internal.BuilderBase<T>>;
    }
    type RegistryEventJS_<T> = RegistryEventJS<T>;
    abstract class AbstractEventExecutorGroup implements Internal.EventExecutorGroup {
        constructor()
        getClass(): typeof any;
        invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        submit(arg0: Internal.Runnable_, arg1: any): Internal.Future<any>;
        schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        abstract next(): Internal.EventExecutor;
        submit(arg0: Internal.Runnable_): Internal.Future<any>;
        abstract isTerminated(): boolean;
        invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.Future<any>;
        abstract isShutdown(): boolean;
        toString(): string;
        "submit(java.util.concurrent.Callable)"(arg0: Internal.Callable_<any>): Internal.Future<any>;
        /**
         * @deprecated
        */
        shutdownNow(): Internal.List<Internal.Runnable>;
        notifyAll(): void;
        "schedule(java.lang.Runnable,long,java.util.concurrent.TimeUnit)"(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdownGracefully(arg0: number, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.Future<any>;
        shutdownGracefully(): io.netty.util.concurrent.Future<any>;
        "schedule(java.util.concurrent.Callable,long,java.util.concurrent.TimeUnit)"(arg0: Internal.Callable_<any>, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        /**
         * @deprecated
        */
        abstract shutdown(): void;
        abstract terminationFuture(): io.netty.util.concurrent.Future<any>;
        abstract iterator(): Internal.Iterator<Internal.EventExecutor>;
        hashCode(): number;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        submit(arg0: Internal.Callable_<any>): Internal.Future<any>;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        wait(): void;
        invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        wait(arg0: number): void;
        execute(arg0: Internal.Runnable_): void;
        equals(arg0: any): boolean;
        abstract isShuttingDown(): boolean;
        schedule(arg0: Internal.Callable_<any>, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        get class(): typeof any
        get terminated(): boolean
        get shutdown(): boolean
        get shuttingDown(): boolean
    }
    type AbstractEventExecutorGroup_ = AbstractEventExecutorGroup;
    interface Boolean2ShortFunction extends it.unimi.dsi.fastutil.Function<boolean, number> {
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Boolean2ByteFunction;
        composeByte(arg0: Internal.Byte2BooleanFunction_): Internal.Byte2ShortFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        apply(arg0: boolean): number;
        defaultReturnValue(): number;
        abstract get(arg0: boolean): number;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Boolean2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        remove(arg0: boolean): number;
        composeInt(arg0: Internal.Int2BooleanFunction_): Internal.Int2ShortFunction;
        "getOrDefault(boolean,short)"(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Short)"(arg0: any, arg1: number): number;
        composeFloat(arg0: Internal.Float2BooleanFunction_): Internal.Float2ShortFunction;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Boolean2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2BooleanFunction_): Internal.Char2ShortFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, boolean>): Internal.Function<T, number>;
        composeObject<T>(arg0: Internal.Object2BooleanFunction_<T>): Internal.Object2ShortFunction<T>;
        identity<T>(): Internal.Function<T, T>;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Boolean2CharFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Boolean2DoubleFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2BooleanFunction_<T>): Internal.Reference2ShortFunction<T>;
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Boolean2IntFunction;
        abstract "get(boolean)"(arg0: boolean): number;
        composeShort(arg0: Internal.Short2BooleanFunction_): Internal.Short2ShortFunction;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Boolean2LongFunction;
        "containsKey(boolean)"(arg0: boolean): boolean;
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Boolean2FloatFunction;
        composeLong(arg0: Internal.Long2BooleanFunction_): Internal.Long2ShortFunction;
        composeDouble(arg0: Internal.Double2BooleanFunction_): Internal.Double2ShortFunction;
        "put(boolean,short)"(arg0: boolean, arg1: number): number;
        getOrDefault(arg0: boolean, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        size(): number;
        defaultReturnValue(arg0: number): void;
        clear(): void;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<boolean, T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Boolean,java.lang.Short)"(arg0: boolean, arg1: number): number;
        "remove(boolean)"(arg0: boolean): number;
    }
    type Boolean2ShortFunction_ = Boolean2ShortFunction;
    interface ScriptTypeHolder {
        abstract kjs$getScriptType(): Internal.ScriptType;
        (): Internal.ScriptType_;
    }
    type ScriptTypeHolder_ = (()=> Internal.ScriptType_) | ScriptTypeHolder;
    interface DensityFunction$ContextProvider {
        abstract forIndex(arg0: number): Internal.DensityFunction$FunctionContext;
        abstract fillAllDirectly(arg0: number[], arg1: Internal.DensityFunction_): void;
    }
    type DensityFunction$ContextProvider_ = DensityFunction$ContextProvider;
    abstract class BanListEntry <T> extends Internal.StoredUserEntry<T> {
        constructor(arg0: T, arg1: Internal.Date_, arg2: string, arg3: Internal.Date_, arg4: string)
        abstract getDisplayName(): Internal.Component;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getExpires(): Internal.Date;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getSource(): string;
        equals(arg0: any): boolean;
        getCreated(): Internal.Date;
        getReason(): string;
        get displayName(): Internal.Component
        get class(): typeof any
        get expires(): Internal.Date
        get source(): string
        get created(): Internal.Date
        get reason(): string
        static readonly EXPIRES_NEVER: ("forever") & (string);
        static readonly DATE_FORMAT: (Internal.SimpleDateFormat) & (Internal.SimpleDateFormat);
    }
    type BanListEntry_<T> = BanListEntry<T>;
    class DyeableHorseArmorItem extends Internal.HorseArmorItem implements Internal.DyeableLeatherItem {
        constructor(arg0: number, arg1: ResourceLocation_, arg2: Internal.Item$Properties_)
        constructor(arg0: number, arg1: string, arg2: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getTexture(): ResourceLocation;
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
        hasCustomColor(arg0: Internal.ItemStack_): boolean;
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
        static dyeArmor(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getProtection(): number;
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
        getColor(arg0: Internal.ItemStack_): number;
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
        clearColor(arg0: Internal.ItemStack_): void;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get texture(): ResourceLocation
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
        get protection(): number
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
    type DyeableHorseArmorItem_ = DyeableHorseArmorItem;
    class MathContext implements Internal.Serializable {
        constructor(arg0: number)
        constructor(arg0: number, arg1: Internal.RoundingMode_)
        constructor(arg0: string)
        getClass(): typeof any;
        hashCode(): number;
        getPrecision(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getRoundingMode(): Internal.RoundingMode;
        get class(): typeof any
        get precision(): number
        get roundingMode(): Internal.RoundingMode
        static readonly DECIMAL128: (Internal.MathContext) & (Internal.MathContext);
        static readonly UNLIMITED: (Internal.MathContext) & (Internal.MathContext);
        static readonly DECIMAL32: (Internal.MathContext) & (Internal.MathContext);
        static readonly DECIMAL64: (Internal.MathContext) & (Internal.MathContext);
    }
    type MathContext_ = MathContext;
    abstract class ScreenEvent$KeyReleased extends Internal.ScreenEvent$KeyInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
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
        getKeyCode(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getScanCode(): number;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get modifiers(): number
        get screen(): Internal.Screen
        get canceled(): boolean
        get keyCode(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get scanCode(): number
    }
    type ScreenEvent$KeyReleased_ = ScreenEvent$KeyReleased;
    class EntityDataAccessor <T> {
        constructor(arg0: number, arg1: Internal.EntityDataSerializer_<T>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getId(): number;
        getSerializer(): Internal.EntityDataSerializer<T>;
        get class(): typeof any
        get id(): number
        get serializer(): Internal.EntityDataSerializer<T>
    }
    type EntityDataAccessor_<T> = EntityDataAccessor<T>;
    abstract class ZoneId implements Internal.Serializable {
        static of(arg0: string): Internal.ZoneId;
        getClass(): typeof any;
        toString(): string;
        static ofOffset(arg0: string, arg1: Internal.ZoneOffset_): Internal.ZoneId;
        notifyAll(): void;
        abstract getId(): string;
        notify(): void;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        wait(arg0: number, arg1: number): void;
        static from(arg0: Internal.TemporalAccessor_): Internal.ZoneId;
        static systemDefault(): Internal.ZoneId;
        hashCode(): number;
        abstract getRules(): Internal.ZoneRules;
        wait(): void;
        static getAvailableZoneIds(): Internal.Set<string>;
        wait(arg0: number): void;
        static of(arg0: string, arg1: Internal.Map_<string, string>): Internal.ZoneId;
        equals(arg0: any): boolean;
        normalized(): this;
        get class(): typeof any
        get id(): string
        get rules(): Internal.ZoneRules
        get availableZoneIds(): Internal.Set<string>
        static readonly SHORT_IDS: ({"BST": "Asia/Dhaka", "ACT": "Australia/Darwin", "HST": "-10:00", "NST": "Pacific/Auckland", "AST": "America/Anchorage", "MST": "-07:00", "SST": "Pacific/Guadalcanal", "CTT": "Asia/Shanghai", "PRT": "America/Puerto_Rico", "ECT": "Europe/Paris", "EAT": "Africa/Addis_Ababa", "EST": "-05:00", "PNT": "America/Phoenix", "PLT": "Asia/Karachi", "CNT": "America/St_Johns", "IET": "America/Indiana/Indianapolis", "VST": "Asia/Ho_Chi_Minh", "JST": "Asia/Tokyo", "ART": "Africa/Cairo", "PST": "America/Los_Angeles", "BET": "America/Sao_Paulo", "MIT": "Pacific/Apia", "CAT": "Africa/Harare", "AGT": "America/Argentina/Buenos_Aires", "NET": "Asia/Yerevan", "CST": "America/Chicago", "IST": "Asia/Kolkata", "AET": "Australia/Sydney"}) & (Internal.Map<string, string>);
    }
    type ZoneId_ = ZoneId;
    class Potion implements Internal.IForgePotion {
        constructor(arg0: string, ...arg1: Internal.MobEffectInstance_[])
        constructor(...arg0: Internal.MobEffectInstance_[])
        getClass(): typeof any;
        isFoil(arg0: Internal.ItemStack_): boolean;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        hasInstantEffects(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getEffects(): Internal.List<Internal.MobEffectInstance>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static byName(arg0: string): Internal.Potion;
        getName(arg0: string): string;
        get class(): typeof any
        get effects(): Internal.List<Internal.MobEffectInstance>
    }
    type Potion_ = Potion | Special.Potion;
    class DoubleBlockHalf extends Internal.Enum<Internal.DoubleBlockHalf> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        static valueOf(arg0: string): Internal.DoubleBlockHalf;
        getSerializedName(): string;
        notifyAll(): void;
        "compareTo(net.minecraft.world.level.block.state.properties.DoubleBlockHalf)"(arg0: Internal.DoubleBlockHalf_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.DoubleBlockHalf[];
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DoubleBlockHalf>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.DoubleBlockHalf_): number;
        getDeclaringClass(): typeof Internal.DoubleBlockHalf;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.DoubleBlockHalf
        static readonly UPPER: (Internal.DoubleBlockHalf) & (Internal.DoubleBlockHalf);
        static readonly LOWER: (Internal.DoubleBlockHalf) & (Internal.DoubleBlockHalf);
    }
    type DoubleBlockHalf_ = "lower" | DoubleBlockHalf | "upper";
    class PlayerTabOverlay {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.Gui_)
        getClass(): typeof any;
        setHeader(arg0: Internal.Component_): void;
        toString(): string;
        notifyAll(): void;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: Internal.Scoreboard_, arg3: Internal.Objective_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setFooter(arg0: Internal.Component_): void;
        hashCode(): number;
        getNameForDisplay(arg0: Internal.PlayerInfo_): Internal.Component;
        wait(): void;
        wait(arg0: number): void;
        reset(): void;
        equals(arg0: any): boolean;
        setVisible(arg0: boolean): void;
        get class(): typeof any
        set header(arg0: Internal.Component_)
        set footer(arg0: Internal.Component_)
        set visible(arg0: boolean)
        static readonly HEART_GOLDEN_FULL: (160) & (number);
        static readonly HEART_EMPTY_CONTAINER: (16) & (number);
        static readonly HEART_GHOST_HALF_FULL: (79) & (number);
        static readonly MAX_ROWS_PER_COL: (20) & (number);
        static readonly HEART_GHOST_FULL: (70) & (number);
        static readonly HEART_GOLDEN_HALF_FULL: (169) & (number);
        static readonly HEART_EMPTY_CONTAINER_BLINKING: (25) & (number);
        static readonly HEART_HALF_FULL: (61) & (number);
        static readonly HEART_FULL: (52) & (number);
    }
    type PlayerTabOverlay_ = PlayerTabOverlay;
    class GolemSensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): void;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        static golemDetected(arg0: Internal.LivingEntity_): void;
        equals(arg0: any): boolean;
        requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        static checkForNearbyGolem(arg0: Internal.LivingEntity_): void;
        get class(): typeof any
    }
    type GolemSensor_ = GolemSensor;
    class BambooStalkBlock extends Internal.Block implements Internal.IPlantable, Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
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
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
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
        static readonly STAGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly AGE_THIN_BAMBOO: (0) & (number);
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly MAX_HEIGHT: (16) & (number);
        static readonly AGE_THICK_BAMBOO: (1) & (number);
        static readonly LEAVES: Internal.EnumProperty<Internal.BambooLeaves>;
        static readonly STAGE_DONE_GROWING: (1) & (number);
        static readonly STAGE_GROWING: (0) & (number);
    }
    type BambooStalkBlock_ = BambooStalkBlock;
    abstract class Permission implements Internal.Guard, Internal.Serializable {
        constructor(arg0: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        abstract implies(arg0: Internal.Permission_): boolean;
        checkGuard(arg0: any): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract hashCode(): number;
        wait(): void;
        getName(): string;
        abstract getActions(): string;
        newPermissionCollection(): Internal.PermissionCollection;
        wait(arg0: number): void;
        abstract equals(arg0: any): boolean;
        get class(): typeof any
        get name(): string
        get actions(): string
    }
    type Permission_ = Permission;
    class ItemTooltipEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getFlags(): Internal.TooltipFlag;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getToolTip(): Internal.List<Internal.Component>;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get flags(): Internal.TooltipFlag
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get toolTip(): Internal.List<Internal.Component>
        get itemStack(): Internal.ItemStack
    }
    type ItemTooltipEvent_ = ItemTooltipEvent;
    interface EntityInLevelCallback {
        abstract onMove(): void;
        abstract onRemove(arg0: Internal.Entity$RemovalReason_): void;
        readonly NULL: Internal.EntityInLevelCallback;
    }
    type EntityInLevelCallback_ = EntityInLevelCallback;
    interface Packet <T extends Internal.PacketListener> {
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        isSkippable(): boolean;
        abstract handle(arg0: T): void;
        get skippable(): boolean
    }
    type Packet_<T extends Internal.PacketListener> = Packet<T>;
    class ClientboundForgetLevelChunkPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get x(): number
        get skippable(): boolean
        get z(): number
    }
    type ClientboundForgetLevelChunkPacket_ = ClientboundForgetLevelChunkPacket;
    class StringBuilder extends Internal.AbstractStringBuilder implements Internal.CharSequence, Internal.Comparable<Internal.StringBuilder>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.CharSequence_)
        constructor(arg0: number)
        constructor(arg0: string)
        "append(int)"(arg0: number): Internal.AbstractStringBuilder;
        insert(arg0: number, arg1: number): this;
        append(arg0: string): Internal.AbstractStringBuilder;
        codePointAt(arg0: number): number;
        insert(arg0: number, arg1: string): Internal.AbstractStringBuilder;
        "insert(int,char)"(arg0: number, arg1: string): this;
        append(arg0: number): Internal.AbstractStringBuilder;
        append(arg0: boolean): Internal.AbstractStringBuilder;
        append(arg0: number): Internal.AbstractStringBuilder;
        lastIndexOf(arg0: string): number;
        notify(): void;
        "append(java.lang.Object)"(arg0: any): Internal.AbstractStringBuilder;
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.StringBuilder_): number;
        getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
        indexOf(arg0: string): number;
        append(arg0: number): Internal.AbstractStringBuilder;
        lastIndexOf(arg0: string, arg1: number): number;
        "insert(int,java.lang.CharSequence)"(arg0: number, arg1: Internal.CharSequence_): this;
        "append(java.lang.CharSequence)"(arg0: Internal.CharSequence_): Internal.AbstractStringBuilder;
        charAt(arg0: number): string;
        insert(arg0: number, arg1: string): this;
        "insert(int,long)"(arg0: number, arg1: number): this;
        length(): number;
        "insert(int,char[],int,int)"(arg0: number, arg1: string[], arg2: number, arg3: number): Internal.AbstractStringBuilder;
        replace(arg0: number, arg1: number, arg2: string): Internal.AbstractStringBuilder;
        "insert(int,char[])"(arg0: number, arg1: string[]): this;
        trimToSize(): void;
        append(arg0: string): Internal.AbstractStringBuilder;
        "delete"(arg0: number, arg1: number): Internal.AbstractStringBuilder;
        static compare(arg0: Internal.CharSequence_, arg1: Internal.CharSequence_): number;
        indexOf(arg0: string, arg1: number): number;
        insert(arg0: number, arg1: boolean): this;
        chars(): Internal.IntStream;
        ensureCapacity(arg0: number): void;
        wait(): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        insert(arg0: number, arg1: any): Internal.AbstractStringBuilder;
        append(arg0: number): Internal.AbstractStringBuilder;
        getClass(): typeof any;
        "append(char)"(arg0: string): Internal.AbstractStringBuilder;
        capacity(): number;
        append(arg0: string[]): Internal.AbstractStringBuilder;
        codePointCount(arg0: number, arg1: number): number;
        insert(arg0: number, arg1: Internal.CharSequence_): this;
        substring(arg0: number): string;
        "insert(int,boolean)"(arg0: number, arg1: boolean): this;
        setCharAt(arg0: number, arg1: string): void;
        setLength(arg0: number): void;
        "insert(int,double)"(arg0: number, arg1: number): Internal.AbstractStringBuilder;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        codePointBefore(arg0: number): number;
        append(arg0: string[], arg1: number, arg2: number): Internal.AbstractStringBuilder;
        "append(java.lang.CharSequence,int,int)"(arg0: Internal.CharSequence_, arg1: number, arg2: number): Internal.AbstractStringBuilder;
        deleteCharAt(arg0: number): Internal.AbstractStringBuilder;
        append(arg0: Internal.StringBuffer_): Internal.AbstractStringBuilder;
        subSequence(arg0: number, arg1: number): Internal.CharSequence;
        append(arg0: Internal.CharSequence_, arg1: number, arg2: number): Internal.AbstractStringBuilder;
        insert(arg0: number, arg1: Internal.CharSequence_, arg2: number, arg3: number): this;
        "append(boolean)"(arg0: boolean): Internal.AbstractStringBuilder;
        "append(char[])"(arg0: string[]): Internal.AbstractStringBuilder;
        "append(double)"(arg0: number): Internal.AbstractStringBuilder;
        substring(arg0: number, arg1: number): string;
        insert(arg0: number, arg1: string[]): this;
        "insert(int,java.lang.Object)"(arg0: number, arg1: any): Internal.AbstractStringBuilder;
        "append(float)"(arg0: number): Internal.AbstractStringBuilder;
        "append(char[],int,int)"(arg0: string[], arg1: number, arg2: number): Internal.AbstractStringBuilder;
        toString(): string;
        insert(arg0: number, arg1: number): Internal.AbstractStringBuilder;
        reverse(): this;
        "compareTo(java.lang.StringBuilder)"(arg0: Internal.StringBuilder_): number;
        "insert(int,java.lang.CharSequence,int,int)"(arg0: number, arg1: Internal.CharSequence_, arg2: number, arg3: number): this;
        "append(java.lang.StringBuffer)"(arg0: Internal.StringBuffer_): Internal.AbstractStringBuilder;
        notifyAll(): void;
        appendCodePoint(arg0: number): this;
        insert(arg0: number, arg1: number): this;
        "append(java.lang.String)"(arg0: string): Internal.AbstractStringBuilder;
        "insert(int,float)"(arg0: number, arg1: number): Internal.AbstractStringBuilder;
        hashCode(): number;
        "insert(int,int)"(arg0: number, arg1: number): this;
        insert(arg0: number, arg1: number): Internal.AbstractStringBuilder;
        wait(arg0: number): void;
        insert(arg0: number, arg1: string[], arg2: number, arg3: number): Internal.AbstractStringBuilder;
        offsetByCodePoints(arg0: number, arg1: number): number;
        "append(long)"(arg0: number): Internal.AbstractStringBuilder;
        append(arg0: any): Internal.AbstractStringBuilder;
        equals(arg0: any): boolean;
        append(arg0: Internal.CharSequence_): Internal.AbstractStringBuilder;
        "insert(int,java.lang.String)"(arg0: number, arg1: string): Internal.AbstractStringBuilder;
        codePoints(): Internal.IntStream;
        get class(): typeof any
        set length(arg0: number)
        get empty(): boolean
    }
    type StringBuilder_ = StringBuilder;
    class Structure$GenerationStub extends Internal.Record {
        constructor(position: BlockPos_, generator: Internal.Either_<Internal.Consumer<Internal.StructurePiecesBuilder>, Internal.StructurePiecesBuilder>)
        constructor(arg0: BlockPos_, arg1: Internal.Consumer_<Internal.StructurePiecesBuilder>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        generator(): Internal.Either<Internal.Consumer<Internal.StructurePiecesBuilder>, Internal.StructurePiecesBuilder>;
        getPiecesBuilder(): Internal.StructurePiecesBuilder;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        position(): BlockPos;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get piecesBuilder(): Internal.StructurePiecesBuilder
    }
    type Structure$GenerationStub_ = Structure$GenerationStub;
    class ModConfigEvent$Reloading extends Internal.ModConfigEvent {
        constructor()
        constructor(arg0: Internal.ModConfig_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        self<T extends Internal.Event & Internal.IConfigEvent>(): T;
        static loading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static reloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        static unloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getConfig(): Internal.ModConfig;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get config(): Internal.ModConfig
    }
    type ModConfigEvent$Reloading_ = ModConfigEvent$Reloading;
    abstract class BaseCommandBlock implements Internal.CommandSource {
        constructor()
        getCommand(): string;
        getClass(): typeof any;
        abstract getLevel(): Internal.ServerLevel;
        abstract getPosition(): Vec3d;
        usedBy(arg0: Internal.Player_): Internal.InteractionResult;
        abstract createCommandSourceStack(): Internal.CommandSourceStack;
        notify(): void;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        wait(arg0: number, arg1: number): void;
        acceptsFailure(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setName(arg0: Internal.Component_): void;
        setSuccessCount(arg0: number): void;
        setLastOutput(arg0: Internal.Component_): void;
        performCommand(arg0: Internal.Level_): boolean;
        isTrackOutput(): boolean;
        abstract isValid(): boolean;
        getName(): Internal.Component;
        toString(): string;
        notifyAll(): void;
        getLastOutput(): Internal.Component;
        shouldInformAdmins(): boolean;
        hashCode(): number;
        alwaysAccepts(): boolean;
        setCommand(arg0: string): void;
        wait(): void;
        wait(arg0: number): void;
        setTrackOutput(arg0: boolean): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        equals(arg0: any): boolean;
        acceptsSuccess(): boolean;
        abstract onUpdated(): void;
        getSuccessCount(): number;
        get command(): string
        get class(): typeof any
        get level(): Internal.ServerLevel
        get position(): Vec3d
        set name(arg0: Internal.Component_)
        set successCount(arg0: number)
        set lastOutput(arg0: Internal.Component_)
        get trackOutput(): boolean
        get valid(): boolean
        get name(): Internal.Component
        get lastOutput(): Internal.Component
        set command(arg0: string)
        set trackOutput(arg0: boolean)
        get successCount(): number
    }
    type BaseCommandBlock_ = BaseCommandBlock;
    class ClientboundLevelChunkWithLightPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.LevelChunk_, arg1: Internal.LevelLightEngine_, arg2: Internal.BitSet_, arg3: Internal.BitSet_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        getLightData(): Internal.ClientboundLightUpdatePacketData;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        getChunkData(): Internal.ClientboundLevelChunkPacketData;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get x(): number
        get lightData(): Internal.ClientboundLightUpdatePacketData
        get skippable(): boolean
        get z(): number
        get chunkData(): Internal.ClientboundLevelChunkPacketData
    }
    type ClientboundLevelChunkWithLightPacket_ = ClientboundLevelChunkWithLightPacket;
    interface Byte2IntFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        abstract get(arg0: number): number;
        defaultReturnValue(): number;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Byte2ShortFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        remove(arg0: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Byte2CharFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2IntFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        "containsKey(byte)"(arg0: number): boolean;
        "put(byte,int)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        apply(arg0: number): number;
        abstract "get(byte)"(arg0: number): number;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2IntFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2IntFunction<T>;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2IntFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Byte2DoubleFunction;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Byte2LongFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Byte,java.lang.Integer)"(arg0: number, arg1: number): number;
        put(arg0: number, arg1: number): number;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2IntFunction;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Byte2ByteFunction;
        clear(): void;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2IntFunction;
        "getOrDefault(byte,int)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        "remove(byte)"(arg0: number): number;
    }
    type Byte2IntFunction_ = Byte2IntFunction;
    class MutableArmorTier implements Internal.ArmorMaterial {
        constructor(id: string, p: Internal.ArmorMaterial_)
        getClass(): typeof any;
        getDefenseForType(equipmentSlot: Internal.ArmorItem$Type_): number;
        setToughness(f: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setEquipSound(e: Internal.SoundEvent_): void;
        setKnockbackResistance(f: number): void;
        setName(name: string): void;
        getToughness(): number;
        getName(): string;
        getEquipSound(): Internal.SoundEvent;
        getVanillaRepairIngredient(): Internal.Ingredient;
        getDurabilityForType(equipmentSlot: Internal.ArmorItem$Type_): number;
        toString(): string;
        getKnockbackResistance(): number;
        getEnchantmentValue(): number;
        notifyAll(): void;
        setEnchantmentValue(i: number): void;
        setSlotProtections(p: number[]): void;
        hashCode(): number;
        wait(): void;
        setDurabilityMultiplier(m: number): void;
        wait(arg0: number): void;
        setRepairIngredient(in_: Internal.Ingredient_): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        set toughness(f: number)
        set equipSound(e: Internal.SoundEvent_)
        set knockbackResistance(f: number)
        set name(name: string)
        get toughness(): number
        get name(): string
        get equipSound(): Internal.SoundEvent
        get vanillaRepairIngredient(): Internal.Ingredient
        get knockbackResistance(): number
        get enchantmentValue(): number
        set enchantmentValue(i: number)
        set slotProtections(p: number[])
        set durabilityMultiplier(m: number)
        set repairIngredient(in_: Internal.Ingredient_)
        readonly parent: Internal.ArmorMaterial;
    }
    type MutableArmorTier_ = MutableArmorTier;
    class ServerboundSetCarriedItemPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
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
        getSlot(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get slot(): number
    }
    type ServerboundSetCarriedItemPacket_ = ServerboundSetCarriedItemPacket;
    interface StreamTagVisitor {
        abstract "visit(long[])"(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(int[])"(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitElement(arg0: Internal.TagType_<any>, arg1: number): Internal.StreamTagVisitor$EntryResult;
        abstract visitEnd(): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(byte[])"(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(long)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(byte)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitList(arg0: Internal.TagType_<any>, arg1: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitEntry(arg0: Internal.TagType_<any>): Internal.StreamTagVisitor$EntryResult;
        abstract visitEntry(arg0: Internal.TagType_<any>, arg1: string): Internal.StreamTagVisitor$EntryResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: string): Internal.StreamTagVisitor$ValueResult;
        abstract visitContainerEnd(): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(java.lang.String)"(arg0: string): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(int)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitRootEntry(arg0: Internal.TagType_<any>): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(double)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(float)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(short)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
    }
    type StreamTagVisitor_ = StreamTagVisitor;
    abstract class CombiningPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static "matchesBlocks(java.util.List)"(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        notify(): void;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        abstract test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        abstract type(): Internal.BlockPredicateType<any>;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(): void;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getClass(): typeof any;
        static "matchesFluids(net.minecraft.core.Vec3i,net.minecraft.world.level.material.Fluid[])"(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number, arg1: number): void;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,net.minecraft.world.level.block.Block[])"(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        toString(): string;
        notifyAll(): void;
        static "matchesBlocks(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesFluids(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        hashCode(): number;
        static codec<T extends Internal.CombiningPredicate>(arg0: Internal.Function_<Internal.List<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>, T>): Internal.Codec<T>;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number): void;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        equals(arg0: any): boolean;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        get class(): typeof any
    }
    type CombiningPredicate_ = CombiningPredicate;
    class BambooLeaves extends Internal.Enum<Internal.BambooLeaves> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        static valueOf(arg0: string): Internal.BambooLeaves;
        getSerializedName(): string;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BambooLeaves>>;
        compareTo(arg0: Internal.BambooLeaves_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.BambooLeaves;
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(net.minecraft.world.level.block.state.properties.BambooLeaves)"(arg0: Internal.BambooLeaves_): number;
        static values(): Internal.BambooLeaves[];
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.BambooLeaves
        static readonly SMALL: (Internal.BambooLeaves) & (Internal.BambooLeaves);
        static readonly NONE: (Internal.BambooLeaves) & (Internal.BambooLeaves);
        static readonly LARGE: (Internal.BambooLeaves) & (Internal.BambooLeaves);
    }
    type BambooLeaves_ = "large" | "small" | "none" | BambooLeaves;
    class SimpleMapCodec <K, V> extends Internal.MapCodec<Internal.Map<K, V>> implements Internal.BaseMapCodec<K, V> {
        constructor(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_)
        keyCodec(): Internal.Codec<K>;
        stable(): Internal.MapCodec<Internal.Map<K, V>>;
        xmap<S>(arg0: Internal.Function_<Internal.Map<K, V>, S>, arg1: Internal.Function_<S, Internal.Map<K, V>>): Internal.MapCodec<S>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: Internal.RecordBuilder_<any>): Internal.RecordBuilder<any>;
        notify(): void;
        comap<B>(arg0: Internal.Function_<B, Internal.Map<K, V>>): Internal.MapEncoder<B>;
        encode<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        orElse(arg0: Internal.Consumer_<string>, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        static unit<A>(arg0: A): Internal.MapCodec<A>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        orElseGet(arg0: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        forGetter<O>(arg0: Internal.Function_<O, Internal.Map<K, V>>): Internal.RecordCodecBuilder<O, Internal.Map<K, V>>;
        static "unit(java.util.function.Supplier)"<A>(arg0: Internal.Supplier_<A>): Internal.MapCodec<A>;
        "orElseGet(java.util.function.UnaryOperator,java.util.function.Supplier)"(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        dependent<E>(arg0: Internal.MapCodec_<E>, arg1: Internal.Function_<Internal.Map<K, V>, com.mojang.datafixers.util.Pair<E, Internal.MapCodec<E>>>, arg2: Internal.BiFunction_<Internal.Map<K, V>, E, Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        elementCodec(): Internal.Codec<V>;
        wait(): void;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.MapCodec<A>;
        getClass(): typeof any;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        "orElse(java.util.function.UnaryOperator,java.util.Map)"(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        codec(): Internal.Codec<Internal.Map<K, V>>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        fieldOf(arg0: string): Internal.MapCodec<Internal.Map<K, V>>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<Internal.Map<K, V>>;
        wait(arg0: number, arg1: number): void;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.MapDecoder<any>;
        flatXmap<S>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<Internal.Map<K, V>>>): Internal.MapCodec<S>;
        "encode(java.lang.Object,com.mojang.serialization.DynamicOps,com.mojang.serialization.RecordBuilder)"(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: Internal.RecordBuilder_<any>): Internal.RecordBuilder<any>;
        decoder(): Internal.Decoder<Internal.Map<K, V>>;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<Internal.Map<K, V>, E>>): Internal.MapDecoder<E>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        toString(): string;
        map<B>(arg0: Internal.Function_<Internal.Map<K, V>, B>): Internal.MapDecoder<B>;
        notifyAll(): void;
        keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        setPartial(arg0: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        flatMap<B>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        "orElse(java.util.function.Consumer,java.util.Map)"(arg0: Internal.Consumer_<string>, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        hashCode(): number;
        mapResult(arg0: Internal.MapCodec$ResultFunction_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.Map<K, V>>>): Internal.MapEncoder<B>;
        encoder(): Internal.Encoder<Internal.Map<K, V>>;
        wait(arg0: number): void;
        "encode(java.util.Map,com.mojang.serialization.DynamicOps,com.mojang.serialization.RecordBuilder)"<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        equals(arg0: any): boolean;
        orElse(arg0: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.Map<K, V>>;
        deprecated(arg0: number): Internal.MapCodec<Internal.Map<K, V>>;
        static "unit(java.lang.Object)"<A>(arg0: A): Internal.MapCodec<A>;
        "orElseGet(java.util.function.Consumer,java.util.function.Supplier)"(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        get class(): typeof any
        set partial(arg0: Internal.Supplier_<Internal.Map<K, V>>)
    }
    type SimpleMapCodec_<K, V> = SimpleMapCodec<K, V>;
    class CompassItem extends Internal.Item implements Internal.Vanishable {
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
        static getSpawnPosition(arg0: Internal.Level_): Internal.GlobalPos;
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
        static getLodestonePosition(arg0: Internal.CompoundTag_): Internal.GlobalPos;
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
        static isLodestoneCompass(arg0: Internal.ItemStack_): boolean;
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
        static readonly TAG_LODESTONE_TRACKED: ("LodestoneTracked") & (string);
        static readonly TAG_LODESTONE_POS: ("LodestonePos") & (string);
        static readonly TAG_LODESTONE_DIMENSION: ("LodestoneDimension") & (string);
    }
    type CompassItem_ = CompassItem;
    interface Blender$DistanceGetter {
        abstract getDistance(arg0: number, arg1: number, arg2: number): number;
        (arg0: number, arg1: number, arg2: number): number;
    }
    type Blender$DistanceGetter_ = ((arg0: number, arg1: number, arg2: number)=> number) | Blender$DistanceGetter;
    interface BootstapContext <T> {
        register(arg0: Internal.ResourceKey_<T>, arg1: T): Internal.Holder$Reference<T>;
        abstract register(arg0: Internal.ResourceKey_<T>, arg1: T, arg2: Internal.Lifecycle_): Internal.Holder$Reference<T>;
        abstract lookup<S>(arg0: Internal.ResourceKey_<Internal.Registry<S>>): Internal.HolderGetter<S>;
        registryLookup<S>(arg0: Internal.ResourceKey_<Internal.Registry<S>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<S>>;
    }
    type BootstapContext_<T> = BootstapContext<T>;
    class CameraType extends Internal.Enum<Internal.CameraType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        isMirrored(): boolean;
        toString(): string;
        notifyAll(): void;
        isFirstPerson(): boolean;
        compareTo(arg0: Internal.CameraType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.CameraType;
        hashCode(): number;
        "compareTo(net.minecraft.client.CameraType)"(arg0: Internal.CameraType_): number;
        ordinal(): number;
        wait(): void;
        static values(): Internal.CameraType[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static valueOf(arg0: string): Internal.CameraType;
        cycle(): this;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CameraType>>;
        get class(): typeof any
        get mirrored(): boolean
        get firstPerson(): boolean
        get declaringClass(): typeof Internal.CameraType
        static readonly THIRD_PERSON_BACK: (Internal.CameraType) & (Internal.CameraType);
        static readonly THIRD_PERSON_FRONT: (Internal.CameraType) & (Internal.CameraType);
        static readonly FIRST_PERSON: (Internal.CameraType) & (Internal.CameraType);
    }
    type CameraType_ = "first_person" | "third_person_back" | "third_person_front" | CameraType;
    class ClientboundSetBorderSizePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.WorldBorder_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        getSize(): number;
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
        get size(): number
        get skippable(): boolean
    }
    type ClientboundSetBorderSizePacket_ = ClientboundSetBorderSizePacket;
    interface Short2LongFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntToLongFunction {
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Short2CharFunction;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2LongFunction;
        remove(arg0: number): number;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2LongFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "containsKey(short)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Short2FloatFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Short2ShortFunction;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Short2IntFunction;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        "getOrDefault(short,long)"(arg0: number, arg1: number): number;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2LongFunction;
        /**
         * @deprecated
        */
        applyAsLong(arg0: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Long)"(arg0: any, arg1: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2LongFunction;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2LongFunction<T>;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Long)"(arg0: number, arg1: number): number;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2LongFunction;
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
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2LongFunction<T>;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Short2DoubleFunction;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2LongFunction;
        "remove(short)"(arg0: number): number;
        abstract "get(short)"(arg0: number): number;
        defaultReturnValue(): number;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        getOrDefault(arg0: number, arg1: number): number;
        size(): number;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        clear(): void;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        defaultReturnValue(arg0: number): void;
        "put(short,long)"(arg0: number, arg1: number): number;
    }
    type Short2LongFunction_ = Short2LongFunction;
    class RecursiveTypeFamily implements Internal.TypeFamily {
        constructor(arg0: string, arg1: Internal.TypeTemplate_)
        fold(arg0: Internal.Algebra_, arg1: Internal.RecursiveTypeFamily_): Internal.IntFunction<Internal.RewriteResult<any, any>>;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        findType<A, B>(arg0: number, arg1: com.mojang.datafixers.types.Type_<A>, arg2: com.mojang.datafixers.types.Type_<B>, arg3: Internal.Type$TypeMatcher_<A, B>, arg4: boolean): Internal.Either<Internal.TypedOptic<any, any, A, B>, Internal.Type$FieldNotFoundException>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        apply(arg0: number): com.mojang.datafixers.types.Type<any>;
        name(): string;
        hashCode(): number;
        size(): number;
        wait(): void;
        everywhere(arg0: number, arg1: Internal.TypeRewriteRule_, arg2: Internal.PointFreeRule_): Internal.Optional<Internal.RewriteResult<any, any>>;
        buildMuType<A>(arg0: com.mojang.datafixers.types.Type_<A>, arg1: Internal.RecursiveTypeFamily_): Internal.RecursivePoint$RecursivePointType<A>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static familyOptic<A, B>(arg0: Internal.IntFunction_<Internal.TypedOptic<any, any, A, B>>): Internal.FamilyOptic<A, B>;
        template(): Internal.TypeTemplate;
        get class(): typeof any
    }
    type RecursiveTypeFamily_ = RecursiveTypeFamily;
    interface DirectMethodHandleDesc extends Internal.MethodHandleDesc {
        abstract isOwnerInterface(): boolean;
        of(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: string): this;
        abstract invocationType(): Internal.MethodTypeDesc;
        abstract methodName(): string;
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        abstract kind(): Internal.DirectMethodHandleDesc$Kind;
        abstract owner(): Internal.ClassDesc;
        ofField(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: Internal.ClassDesc_): this;
        ofMethod(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: Internal.MethodTypeDesc_): this;
        asType(arg0: Internal.MethodTypeDesc_): Internal.MethodHandleDesc;
        abstract lookupDescriptor(): string;
        abstract refKind(): number;
        ofConstructor(arg0: Internal.ClassDesc_, ...arg1: Internal.ClassDesc_[]): this;
        abstract equals(arg0: any): boolean;
        get ownerInterface(): boolean
    }
    type DirectMethodHandleDesc_ = DirectMethodHandleDesc;
    class TextureAtlasSprite {
        wrap(arg0: Internal.VertexConsumer_): Internal.VertexConsumer;
        getClass(): typeof any;
        getX(): number;
        getY(): number;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        uploadFirstFrame(): void;
        uvShrinkRatio(): number;
        atlasLocation(): ResourceLocation;
        getU1(): number;
        getU0(): number;
        toString(): string;
        notifyAll(): void;
        contents(): Internal.SpriteContents;
        getUOffset(arg0: number): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getU(arg0: number): number;
        createTicker(): Internal.TextureAtlasSprite$Ticker;
        getVOffset(arg0: number): number;
        getV1(): number;
        equals(arg0: any): boolean;
        getV(arg0: number): number;
        getV0(): number;
        get class(): typeof any
        get x(): number
        get y(): number
        get u1(): number
        get u0(): number
        get v1(): number
        get v0(): number
    }
    type TextureAtlasSprite_ = TextureAtlasSprite;
    class IExtensionPoint$DisplayTest extends Internal.Record implements Internal.IExtensionPoint<Internal.IExtensionPoint$DisplayTest> {
        constructor(arg0: string, arg1: Internal.BiPredicate_<string, boolean>)
        constructor(suppliedVersion: Internal.Supplier_<string>, remoteVersionTest: Internal.BiPredicate_<string, boolean>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        remoteVersionTest(): Internal.BiPredicate<string, boolean>;
        notify(): void;
        suppliedVersion(): Internal.Supplier<string>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly IGNORE_ALL_VERSION: Internal.Supplier<Internal.IExtensionPoint$DisplayTest>;
        static readonly IGNORESERVERONLY: ("OHNOES😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱") & (string);
        static readonly IGNORE_SERVER_VERSION: Internal.Supplier<Internal.IExtensionPoint$DisplayTest>;
    }
    type IExtensionPoint$DisplayTest_ = IExtensionPoint$DisplayTest;
    class UnmodifiableCommentedConfig$CommentNode {
        constructor(arg0: string, arg1: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>)
        getClass(): typeof any;
        hashCode(): number;
        getComment(): string;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getChildren(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>;
        get class(): typeof any
        get comment(): string
        get children(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>
    }
    type UnmodifiableCommentedConfig$CommentNode_ = UnmodifiableCommentedConfig$CommentNode;
    class VinesFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Internal.Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type VinesFeature_ = VinesFeature;
    class Transformation implements Internal.IForgeTransformation {
        constructor(arg0: Matrix4f_)
        constructor(arg0: Vec3f_, arg1: Quaternionf_, arg2: Vec3f_, arg3: Quaternionf_)
        getClass(): typeof any;
        getScale(): Vec3f;
        getMatrix(): Matrix4f;
        blockCenterToCorner(): this;
        rotateTransform(arg0: Internal.Direction_): Internal.Direction;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isIdentity(): boolean;
        getNormalMatrix(): Matrix3f;
        inverse(): this;
        toString(): string;
        compose(arg0: Internal.Transformation_): this;
        notifyAll(): void;
        getTranslation(): Vec3f;
        static identity(): Internal.Transformation;
        transformNormal(arg0: Vec3f_): void;
        slerp(arg0: Internal.Transformation_, arg1: number): this;
        getRightRotation(): Quaternionf;
        blockCornerToCenter(): this;
        transformPosition(arg0: Vec4f_): void;
        hashCode(): number;
        wait(): void;
        getLeftRotation(): Quaternionf;
        applyOrigin(arg0: Vec3f_): this;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get scale(): Vec3f
        get matrix(): Matrix4f
        get identity(): boolean
        get normalMatrix(): Matrix3f
        get translation(): Vec3f
        get rightRotation(): Quaternionf
        get leftRotation(): Quaternionf
        static readonly EXTENDED_CODEC: Internal.Codec<Internal.Transformation>;
        static readonly CODEC: Internal.Codec<Internal.Transformation>;
    }
    type Transformation_ = Transformation;
    class StackedContents {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static fromStackingIndex(arg0: number): Internal.ItemStack;
        static getStackingIndex(arg0: Internal.ItemStack_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        accountStack(arg0: Internal.ItemStack_): void;
        hashCode(): number;
        canCraft(arg0: Internal.Recipe_<any>, arg1: Internal.IntList_): boolean;
        canCraft(arg0: Internal.Recipe_<any>, arg1: Internal.IntList_, arg2: number): boolean;
        accountStack(arg0: Internal.ItemStack_, arg1: number): void;
        wait(): void;
        clear(): void;
        accountSimpleStack(arg0: Internal.ItemStack_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getBiggestCraftableStack(arg0: Internal.Recipe_<any>, arg1: number, arg2: Internal.IntList_): number;
        getBiggestCraftableStack(arg0: Internal.Recipe_<any>, arg1: Internal.IntList_): number;
        get class(): typeof any
        readonly contents: Internal.Int2IntMap;
    }
    type StackedContents_ = StackedContents;
    interface StructureAccess {
        abstract addReferenceForStructure(arg0: Internal.Structure_, arg1: number): void;
        abstract getAllReferences(): Internal.Map<Internal.Structure, Internal.LongSet>;
        abstract setAllReferences(arg0: Internal.Map_<Internal.Structure, Internal.LongSet>): void;
        abstract getStartForStructure(arg0: Internal.Structure_): Internal.StructureStart;
        abstract setStartForStructure(arg0: Internal.Structure_, arg1: Internal.StructureStart_): void;
        abstract getReferencesForStructure(arg0: Internal.Structure_): Internal.LongSet;
        get allReferences(): Internal.Map<Internal.Structure, Internal.LongSet>
        set allReferences(arg0: Internal.Map_<Internal.Structure, Internal.LongSet>)
    }
    type StructureAccess_ = StructureAccess;
    abstract class WorldCarver <C extends Internal.CarverConfiguration> {
        constructor(arg0: Internal.Codec_<C>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredWorldCarver<C>>;
        getRange(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        configured(arg0: C): Internal.ConfiguredWorldCarver<C>;
        wait(): void;
        abstract isStartChunk(arg0: C, arg1: Internal.RandomSource_): boolean;
        wait(arg0: number): void;
        abstract carve(arg0: Internal.CarvingContext_, arg1: C, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get range(): number
        static readonly CANYON: (Internal.CanyonWorldCarver) & (Internal.WorldCarver<Internal.CanyonCarverConfiguration>);
        static readonly NETHER_CAVE: (Internal.NetherWorldCarver) & (Internal.WorldCarver<Internal.CaveCarverConfiguration>);
        static readonly CAVE: (Internal.CaveWorldCarver) & (Internal.WorldCarver<Internal.CaveCarverConfiguration>);
    }
    type WorldCarver_<C extends Internal.CarverConfiguration> = WorldCarver<C> | Special.Carver;
    abstract class Sensor <E extends Internal.LivingEntity> {
        constructor()
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        abstract requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        tick(arg0: Internal.ServerLevel_, arg1: E): void;
        get class(): typeof any
    }
    type Sensor_<E extends Internal.LivingEntity> = Sensor<E>;
    class ExplosionEvent$Detonate extends Internal.ExplosionEvent {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.Explosion_, arg2: Internal.List_<Internal.Entity>)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        getAffectedEntities(): Internal.List<Internal.Entity>;
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
        getAffectedBlocks(): Internal.List<BlockPos>;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get affectedEntities(): Internal.List<Internal.Entity>
        get canceled(): boolean
        get level(): Internal.Level
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get explosion(): Internal.Explosion
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get affectedBlocks(): Internal.List<BlockPos>
    }
    type ExplosionEvent$Detonate_ = ExplosionEvent$Detonate;
    class ServerboundPongPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
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
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getId(): number;
        get class(): typeof any
        get skippable(): boolean
        get id(): number
    }
    type ServerboundPongPacket_ = ServerboundPongPacket;
    class Options {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.File_)
        panoramaSpeed(): Internal.OptionInstance<number>;
        touchscreen(): Internal.OptionInstance<boolean>;
        biomeBlendRadius(): Internal.OptionInstance<number>;
        cloudStatus(): Internal.OptionInstance<Internal.CloudStatus>;
        guiScale(): Internal.OptionInstance<number>;
        chatOpacity(): Internal.OptionInstance<number>;
        hideLightningFlash(): Internal.OptionInstance<boolean>;
        chatColors(): Internal.OptionInstance<boolean>;
        notificationDisplayTime(): Internal.OptionInstance<number>;
        glintSpeed(): Internal.OptionInstance<number>;
        ambientOcclusion(): Internal.OptionInstance<boolean>;
        chatWidth(): Internal.OptionInstance<number>;
        simulationDistance(): Internal.OptionInstance<number>;
        chatDelay(): Internal.OptionInstance<number>;
        chatLinks(): Internal.OptionInstance<boolean>;
        soundDevice(): Internal.OptionInstance<string>;
        getCloudsType(): Internal.CloudStatus;
        getSoundSourceVolume(arg0: Internal.SoundSource_): number;
        autoSuggestions(): Internal.OptionInstance<boolean>;
        gamma(): Internal.OptionInstance<number>;
        textBackgroundOpacity(): Internal.OptionInstance<number>;
        toggleSprint(): Internal.OptionInstance<boolean>;
        screenEffectScale(): Internal.OptionInstance<number>;
        getClass(): typeof any;
        setCameraType(arg0: Internal.CameraType_): void;
        showAutosaveIndicator(): Internal.OptionInstance<boolean>;
        autoJump(): Internal.OptionInstance<boolean>;
        reducedDebugInfo(): Internal.OptionInstance<boolean>;
        useNativeTransport(): boolean;
        bobView(): Internal.OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        operatorItemsTab(): Internal.OptionInstance<boolean>;
        chatHeightFocused(): Internal.OptionInstance<number>;
        load(): void;
        glintStrength(): Internal.OptionInstance<number>;
        setKey(arg0: Internal.KeyMapping_, arg1: Internal.InputConstants$Key_): void;
        toString(): string;
        fov(): Internal.OptionInstance<number>;
        static "genericValueLabel(net.minecraft.network.chat.Component,net.minecraft.network.chat.Component)"(arg0: Internal.Component_, arg1: Internal.Component_): Internal.Component;
        getSoundSourceOptionInstance(arg0: Internal.SoundSource_): Internal.OptionInstance<number>;
        notifyAll(): void;
        mipmapLevels(): Internal.OptionInstance<number>;
        chatHeightUnfocused(): Internal.OptionInstance<number>;
        updateResourcePacks(arg0: Internal.PackRepository_): void;
        save(): void;
        rawMouseInput(): Internal.OptionInstance<boolean>;
        wait(arg0: number): void;
        fovEffectScale(): Internal.OptionInstance<number>;
        invertYMouse(): Internal.OptionInstance<boolean>;
        getBackgroundColor(arg0: number): number;
        dumpOptionsForReport(): string;
        chatLinksPrompt(): Internal.OptionInstance<boolean>;
        backgroundForChatOnly(): Internal.OptionInstance<boolean>;
        entityShadows(): Internal.OptionInstance<boolean>;
        damageTiltStrength(): Internal.OptionInstance<number>;
        mouseWheelSensitivity(): Internal.OptionInstance<number>;
        notify(): void;
        telemetryOptInExtra(): Internal.OptionInstance<boolean>;
        attackIndicator(): Internal.OptionInstance<Internal.AttackIndicatorStatus>;
        framerateLimit(): Internal.OptionInstance<number>;
        chatScale(): Internal.OptionInstance<number>;
        setServerRenderDistance(arg0: number): void;
        darknessEffectScale(): Internal.OptionInstance<number>;
        highContrast(): Internal.OptionInstance<boolean>;
        broadcastOptions(): void;
        mainHand(): Internal.OptionInstance<Internal.HumanoidArm>;
        "getBackgroundColor(int)"(arg0: number): number;
        particles(): Internal.OptionInstance<Internal.ParticleStatus>;
        static genericValueLabel(arg0: Internal.Component_, arg1: Internal.Component_): Internal.Component;
        onlyShowSecureChat(): Internal.OptionInstance<boolean>;
        realmsNotifications(): Internal.OptionInstance<boolean>;
        getFile(): Internal.File;
        prioritizeChunkUpdates(): Internal.OptionInstance<Internal.PrioritizeChunkUpdates>;
        static "genericValueLabel(net.minecraft.network.chat.Component,int)"(arg0: Internal.Component_, arg1: number): Internal.Component;
        getBackgroundColor(arg0: number): number;
        loadSelectedResourcePacks(arg0: Internal.PackRepository_): void;
        wait(): void;
        entityDistanceScaling(): Internal.OptionInstance<number>;
        enableVsync(): Internal.OptionInstance<boolean>;
        fullscreen(): Internal.OptionInstance<boolean>;
        showSubtitles(): Internal.OptionInstance<boolean>;
        discreteMouseScroll(): Internal.OptionInstance<boolean>;
        isModelPartEnabled(arg0: Internal.PlayerModelPart_): boolean;
        load(arg0: boolean): void;
        narrator(): Internal.OptionInstance<Internal.NarratorStatus>;
        static genericValueLabel(arg0: Internal.Component_, arg1: number): Internal.Component;
        wait(arg0: number, arg1: number): void;
        chatLineSpacing(): Internal.OptionInstance<number>;
        forceUnicodeFont(): Internal.OptionInstance<boolean>;
        renderDistance(): Internal.OptionInstance<number>;
        allowServerListing(): Internal.OptionInstance<boolean>;
        directionalAudio(): Internal.OptionInstance<boolean>;
        toggleCrouch(): Internal.OptionInstance<boolean>;
        getBackgroundOpacity(arg0: number): number;
        hideMatchedNames(): Internal.OptionInstance<boolean>;
        toggleModelPart(arg0: Internal.PlayerModelPart_, arg1: boolean): void;
        getCameraType(): Internal.CameraType;
        "getBackgroundColor(float)"(arg0: number): number;
        hashCode(): number;
        chatVisibility(): Internal.OptionInstance<Internal.ChatVisiblity>;
        sensitivity(): Internal.OptionInstance<number>;
        graphicsMode(): Internal.OptionInstance<Internal.GraphicsStatus>;
        equals(arg0: any): boolean;
        darkMojangStudiosBackground(): Internal.OptionInstance<boolean>;
        get cloudsType(): Internal.CloudStatus
        get class(): typeof any
        set cameraType(arg0: Internal.CameraType_)
        get effectiveRenderDistance(): number
        set serverRenderDistance(arg0: number)
        get file(): Internal.File
        get cameraType(): Internal.CameraType
        readonly keySwapOffhand: Internal.KeyMapping;
        readonly keyDown: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_NORMAL: (8) & (number);
        static readonly RENDER_DISTANCE_FAR: (12) & (number);
        hideBundleTutorial: boolean;
        readonly keyUp: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_EXTREME: (32) & (number);
        skipMultiplayerWarning: boolean;
        readonly keyShift: Internal.KeyMapping;
        hideGui: boolean;
        readonly keyScreenshot: Internal.KeyMapping;
        pauseOnLostFocus: boolean;
        languageCode: string;
        readonly keyPlayerList: Internal.KeyMapping;
        static readonly AUTO_GUI_SCALE: (0) & (number);
        readonly keyRight: Internal.KeyMapping;
        smoothCamera: boolean;
        readonly keyCommand: Internal.KeyMapping;
        readonly keyAttack: Internal.KeyMapping;
        renderFpsChart: boolean;
        readonly keyChat: Internal.KeyMapping;
        readonly keyPickItem: Internal.KeyMapping;
        joinedFirstServer: boolean;
        static readonly RENDER_DISTANCE_TINY: (2) & (number);
        incompatibleResourcePacks: Internal.List<string>;
        readonly keyFullscreen: Internal.KeyMapping;
        skipRealms32bitWarning: boolean;
        fullscreenVideoModeString: string;
        useNativeTransport: boolean;
        glDebugVerbosity: number;
        readonly keyTogglePerspective: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_REALLY_FAR: (16) & (number);
        readonly keySmoothCamera: Internal.KeyMapping;
        static readonly UNLIMITED_FRAMERATE_CUTOFF: (260) & (number);
        overrideWidth: number;
        readonly keySaveHotbarActivator: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_SHORT: (4) & (number);
        overrideHeight: number;
        renderDebug: boolean;
        lastMpIp: string;
        readonly keyAdvancements: Internal.KeyMapping;
        readonly keyLeft: Internal.KeyMapping;
        readonly keyJump: Internal.KeyMapping;
        readonly keyUse: Internal.KeyMapping;
        readonly keyDrop: Internal.KeyMapping;
        onboardAccessibility: boolean;
        resourcePacks: Internal.List<string>;
        readonly keySocialInteractions: Internal.KeyMapping;
        readonly keySpectatorOutlines: Internal.KeyMapping;
        readonly keySprint: Internal.KeyMapping;
        readonly keyInventory: Internal.KeyMapping;
        readonly keyLoadHotbarActivator: Internal.KeyMapping;
        advancedItemTooltips: boolean;
        renderDebugCharts: boolean;
        syncWrites: boolean;
        readonly keyHotbarSlots: Internal.KeyMapping[];
        hideServerAddress: boolean;
        tutorialStep: Internal.TutorialSteps;
        keyMappings: Internal.KeyMapping[];
        static readonly DEFAULT_SOUND_DEVICE: ("") & (string);
    }
    type Options_ = Options;
    interface Weighted <T> {
        abstract getSound(arg0: Internal.RandomSource_): T;
        abstract getWeight(): number;
        abstract preloadIfRequired(arg0: Internal.SoundEngine_): void;
        get weight(): number
    }
    type Weighted_<T> = Weighted<T>;
    class Heightmap {
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.Heightmap$Types_)
        getClass(): typeof any;
        getHighestTaken(arg0: number, arg1: number): number;
        toString(): string;
        notifyAll(): void;
        getFirstAvailable(arg0: number, arg1: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        update(arg0: number, arg1: number, arg2: number, arg3: Internal.BlockState_): boolean;
        setRawData(arg0: Internal.ChunkAccess_, arg1: Internal.Heightmap$Types_, arg2: number[]): void;
        hashCode(): number;
        static primeHeightmaps(arg0: Internal.ChunkAccess_, arg1: Internal.Set_<Internal.Heightmap$Types>): void;
        wait(): void;
        wait(arg0: number): void;
        getRawData(): number[];
        equals(arg0: any): boolean;
        get class(): typeof any
        get rawData(): number[]
    }
    type Heightmap_ = Heightmap;
    class CustomCommandEventJS extends Internal.EntityEventJS {
        constructor(l: Internal.Level_, e: Internal.Entity_, p: BlockPos_, i: string)
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
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        getId(): string;
        notify(): void;
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
        getServer(): Internal.MinecraftServer;
        getBlock(): Internal.BlockContainerJS;
        get class(): typeof any
        get id(): string
        get level(): Internal.Level
        get entity(): Internal.Entity
        get player(): Internal.Player
        get server(): Internal.MinecraftServer
        get block(): Internal.BlockContainerJS
    }
    type CustomCommandEventJS_ = CustomCommandEventJS;
    interface RepeatedDelayStrategy {
        abstract delayCyclesAfterSuccess(): number;
        exponentialBackoff(arg0: number): this;
        abstract delayCyclesAfterFailure(): number;
        readonly CONSTANT: Internal.RepeatedDelayStrategy;
    }
    type RepeatedDelayStrategy_ = RepeatedDelayStrategy;
    abstract class AbstractWidget implements Internal.LayoutElement, Internal.NarratableEntry, Internal.GuiEventListener, Internal.Renderable {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Component_)
        charTyped(arg0: string, arg1: number): boolean;
        onRelease(arg0: number, arg1: number): void;
        getY(): number;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        getTooltip(): Internal.Tooltip;
        onClick(arg0: number, arg1: number): void;
        setTooltip(arg0: Internal.Tooltip_): void;
        setX(arg0: number): void;
        clearFGColor(): void;
        setAlpha(arg0: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        isHovered(): boolean;
        getWidth(): number;
        setPosition(arg0: number, arg1: number): void;
        visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        wait(): void;
        isHoveredOrFocused(): boolean;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        setMessage(arg0: Internal.Component_): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        getX(): number;
        isActive(): boolean;
        getTabOrderGroup(): number;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        setTooltipDelay(arg0: number): void;
        getMessage(): Internal.Component;
        setY(arg0: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setWidth(arg0: number): void;
        getHeight(): number;
        setTabOrderGroup(arg0: number): void;
        getFGColor(): number;
        toString(): string;
        renderTexture(arg0: Internal.GuiGraphics_, arg1: ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        notifyAll(): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        playDownSound(arg0: Internal.SoundManager_): void;
        hashCode(): number;
        static wrapDefaultNarrationMessage(arg0: Internal.Component_): Internal.MutableComponent;
        getCurrentFocusPath(): Internal.ComponentPath;
        setFGColor(arg0: number): void;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        wait(arg0: number): void;
        setHeight(arg0: number): void;
        equals(arg0: any): boolean;
        get y(): number
        set focused(arg0: boolean)
        get tooltip(): Internal.Tooltip
        set tooltip(arg0: Internal.Tooltip_)
        set x(arg0: number)
        set alpha(arg0: number)
        get rectangle(): Internal.ScreenRectangle
        get hovered(): boolean
        get width(): number
        get hoveredOrFocused(): boolean
        set message(arg0: Internal.Component_)
        get class(): typeof any
        get focused(): boolean
        get x(): number
        get active(): boolean
        get tabOrderGroup(): number
        set tooltipDelay(arg0: number)
        get message(): Internal.Component
        set y(arg0: number)
        set width(arg0: number)
        get height(): number
        set tabOrderGroup(arg0: number)
        get FGColor(): number
        get currentFocusPath(): Internal.ComponentPath
        set FGColor(arg0: number)
        set height(arg0: number)
        visible: boolean;
        static readonly WIDGETS_LOCATION: (ResourceLocation) & (ResourceLocation);
        static readonly ACCESSIBILITY_TEXTURE: (ResourceLocation) & (ResourceLocation);
        static readonly UNSET_FG_COLOR: (-1) & (number);
        active: boolean;
    }
    type AbstractWidget_ = AbstractWidget;
    class EntityEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Entity_)
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
        hashCode(): number;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
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
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type EntityEvent_ = EntityEvent;
    class VecDeltaCodec {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        delta(arg0: Vec3d_): Vec3d;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setBase(arg0: Vec3d_): void;
        decode(arg0: number, arg1: number, arg2: number): Vec3d;
        encodeY(arg0: Vec3d_): number;
        hashCode(): number;
        encodeX(arg0: Vec3d_): number;
        encodeZ(arg0: Vec3d_): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        set base(arg0: Vec3d_)
    }
    type VecDeltaCodec_ = VecDeltaCodec;
    class Realms32BitWarningStatus {
        constructor(arg0: Internal.Minecraft_)
        showRealms32BitWarningIfNeeded(arg0: Internal.Screen_): void;
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
    }
    type Realms32BitWarningStatus_ = Realms32BitWarningStatus;
    class InteractionResultHolder <T> {
        constructor(arg0: Internal.InteractionResult_, arg1: T)
        getClass(): typeof any;
        toString(): string;
        static fail<T>(arg0: T): Internal.InteractionResultHolder<T>;
        notifyAll(): void;
        notify(): void;
        static pass<T>(arg0: T): Internal.InteractionResultHolder<T>;
        wait(arg0: number, arg1: number): void;
        getResult(): Internal.InteractionResult;
        hashCode(): number;
        static consume<T>(arg0: T): Internal.InteractionResultHolder<T>;
        wait(): void;
        wait(arg0: number): void;
        getObject(): T;
        static success<T>(arg0: T): Internal.InteractionResultHolder<T>;
        equals(arg0: any): boolean;
        static sidedSuccess<T>(arg0: T, arg1: boolean): Internal.InteractionResultHolder<T>;
        get class(): typeof any
        get result(): Internal.InteractionResult
        get object(): T
    }
    type InteractionResultHolder_<T> = InteractionResultHolder<T>;
    class CherryFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: Internal.IntProvider_, arg3: number, arg4: number, arg5: number, arg6: number)
        getClass(): typeof any;
        hashCode(): number;
        createFoliage(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: number, arg5: Internal.FoliagePlacer$FoliageAttachment_, arg6: number, arg7: number): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        foliageHeight(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.TreeConfiguration_): number;
        equals(arg0: any): boolean;
        notify(): void;
        foliageRadius(arg0: Internal.RandomSource_, arg1: number): number;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.CherryFoliagePlacer>;
    }
    type CherryFoliagePlacer_ = CherryFoliagePlacer;
    class StoringChunkProgressListener implements Internal.ChunkProgressListener {
        constructor(arg0: number)
        getProgress(): number;
        getClass(): typeof any;
        getFullDiameter(): number;
        toString(): string;
        getDiameter(): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        start(): void;
        hashCode(): number;
        getStatus(arg0: number, arg1: number): Internal.ChunkStatus;
        wait(): void;
        stop(): void;
        wait(arg0: number): void;
        onStatusChange(arg0: Internal.ChunkPos_, arg1: Internal.ChunkStatus_): void;
        updateSpawnPos(arg0: Internal.ChunkPos_): void;
        equals(arg0: any): boolean;
        get progress(): number
        get class(): typeof any
        get fullDiameter(): number
        get diameter(): number
    }
    type StoringChunkProgressListener_ = StoringChunkProgressListener;
    class BuilderType <T> extends Internal.Record {
        constructor(type: string, builderClass: Internal.BuilderBase<T>, factory: Internal.BuilderFactory_)
        factory(): Internal.BuilderFactory;
        getClass(): typeof any;
        type(): string;
        hashCode(): number;
        builderClass(): Internal.BuilderBase<T>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type BuilderType_<T> = BuilderType<T>;
    class BlockContainerJS implements Internal.SpecialEquality {
        constructor(blockEntity: Internal.BlockEntity_)
        constructor(w: Internal.Level_, p: BlockPos_)
        getTags(): Internal.Collection<ResourceLocation>;
        getWest(): this;
        getY(): number;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getNorth(): this;
        getBlockLight(): number;
        notify(): void;
        spawnLightning(): void;
        spawnFireworks(fireworks: Internal.FireworksJS_): void;
        getPos(): BlockPos;
        getDown(): this;
        getLight(): number;
        getDrops(): Internal.List<Internal.ItemStack>;
        getSouth(): this;
        getSkyLight(): number;
        mergeEntityData(tag: Internal.CompoundTag_): void;
        getCanSeeSky(): boolean;
        getDimension(): ResourceLocation;
        getBlockState(): Internal.BlockState;
        specialEquals(o: any, shallow: boolean): boolean;
        hasTag(tag: ResourceLocation_): boolean;
        getTypeData(): Internal.CompoundTag;
        getInventory(): Internal.InventoryKJS;
        wait(): void;
        offset(x: number, y: number, z: number): this;
        offset(f: Internal.Direction_): this;
        getClass(): typeof any;
        offset(f: Internal.Direction_, d: number): this;
        spawnLightning(effectOnly: boolean, player: Internal.ServerPlayer_): void;
        getEast(): this;
        getEntityId(): string;
        getX(): number;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getDrops(entity: Internal.Entity_, heldItem: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        set(id: Special.Block, properties: Internal.Map_<any, any>): void;
        popItem(item: Internal.ItemStack_): void;
        set(id: Special.Block, properties: Internal.Map_<any, any>, flags: number): void;
        wait(arg0: number, arg1: number): void;
        setBlockState(state: Internal.BlockState_, flags: number): void;
        getLevel(): Internal.Level;
        popItemFromFace(item: Internal.ItemStack_, dir: Internal.Direction_): void;
        getEntity(): Internal.BlockEntity;
        getPlayersInRadius(radius: number): Internal.EntityArrayList;
        getUp(): this;
        clearCache(): void;
        getZ(): number;
        getEntityData(): Internal.CompoundTag;
        spawnLightning(effectOnly: boolean): void;
        toString(): string;
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        getInventory(facing: Internal.Direction_): Internal.InventoryKJS;
        getId(): Special.Block&`${string}:${string}`;
        canSeeSkyFromBelowWater(): boolean;
        hashCode(): number;
        createExplosion(): Internal.ExplosionJS;
        getProperties(): Internal.Map<string, string>;
        setEntityData(tag: Internal.CompoundTag_): void;
        set(id: Special.Block): void;
        getPlayersInRadius(): Internal.EntityArrayList;
        wait(arg0: number): void;
        equals(obj: any): boolean;
        getBiomeId(): ResourceLocation;
        get tags(): Internal.Collection<ResourceLocation>
        get west(): Internal.BlockContainerJS
        get y(): number
        get north(): Internal.BlockContainerJS
        get blockLight(): number
        get pos(): BlockPos
        get down(): Internal.BlockContainerJS
        get light(): number
        get drops(): Internal.List<Internal.ItemStack>
        get south(): Internal.BlockContainerJS
        get skyLight(): number
        get canSeeSky(): boolean
        get dimension(): ResourceLocation
        get blockState(): Internal.BlockState
        get typeData(): Internal.CompoundTag
        get inventory(): Internal.InventoryKJS
        get class(): typeof any
        get east(): Internal.BlockContainerJS
        get entityId(): string
        get x(): number
        get level(): Internal.Level
        get entity(): Internal.BlockEntity
        get up(): Internal.BlockContainerJS
        get z(): number
        get entityData(): Internal.CompoundTag
        get item(): Internal.ItemStack
        get id(): Special.Block&`${string}:${string}`
        get properties(): Internal.Map<string, string>
        set entityData(tag: Internal.CompoundTag_)
        get playersInRadius(): Internal.EntityArrayList
        get biomeId(): ResourceLocation
        readonly minecraftLevel: Internal.Level;
    }
    type BlockContainerJS_ = BlockContainerJS;
    class ServerboundSignUpdatePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: BlockPos_, arg1: boolean, arg2: string, arg3: string, arg4: string, arg5: string)
        constructor(arg0: Internal.FriendlyByteBuf_)
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
        getPos(): BlockPos;
        hashCode(): number;
        isFrontText(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getLines(): string[];
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get pos(): BlockPos
        get frontText(): boolean
        get lines(): string[]
    }
    type ServerboundSignUpdatePacket_ = ServerboundSignUpdatePacket;
    class AmbientParticleSettings {
        constructor(arg0: Internal.ParticleOptions_, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getOptions(): Internal.ParticleOptions;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        canSpawn(arg0: Internal.RandomSource_): boolean;
        get class(): typeof any
        get options(): Internal.ParticleOptions
        static readonly CODEC: Internal.Codec<Internal.AmbientParticleSettings>;
    }
    type AmbientParticleSettings_ = AmbientParticleSettings;
    class EnderDragon extends Internal.Mob implements Internal.Enemy {
        constructor(arg0: Internal.EntityType_<Internal.EnderDragon>, arg1: Internal.Level_)
        getHeadLookVector(arg0: number): Vec3d;
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
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
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
        onFlap(): void;
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
        findPath(arg0: number, arg1: number, arg2: Internal.Node_): net.minecraft.world.level.pathfinder.Path;
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
        getEntityData(): Internal.SynchedEntityData;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        findClosestNode(arg0: number, arg1: number, arg2: number): number;
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
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
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
        getPhaseManager(): Internal.EnderDragonPhaseManager;
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
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        onLeaveCombat(): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: DamageSource_): void;
        canChangeDimensions(): boolean;
        isWithinRestriction(): boolean;
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
        onCrystalDestroyed(arg0: Internal.EndCrystal_, arg1: BlockPos_, arg2: DamageSource_): void;
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
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
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
        kill(): void;
        canBeSeenAsEnemy(): boolean;
        onEnterCombat(): void;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        animateHurt(arg0: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        setDragonFight(arg0: Internal.EndDragonFight_): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        hasRestriction(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        getParts(): Internal.PartEntity<any>[];
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
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
        getLatencyPos(arg0: number, arg1: number): number[];
        getVisibilityPercent(arg0: Internal.Entity_): number;
        setGlowing(arg0: boolean): void;
        getMaxSpawnClusterSize(): number;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        hurt(arg0: Internal.EnderDragonPart_, arg1: DamageSource_, arg2: number): boolean;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getUsername(): string;
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
        getSubEntities(): Internal.EnderDragonPart[];
        getPickResult(): Internal.ItemStack;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        findClosestNode(): number;
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
        getFightOrigin(): BlockPos;
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
        setFightOrigin(arg0: BlockPos_): void;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        setId(arg0: number): void;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        calculateEntityAnimation(arg0: boolean): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onAboveBubbleCol(arg0: boolean): void;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
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
        isFlapping(): boolean;
        getHeadPartYOffset(arg0: number, arg1: number[], arg2: number[]): number;
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
        getDragonFight(): Internal.EndDragonFight;
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
        get phaseManager(): Internal.EnderDragonPhaseManager
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
        set canPickUpLoot(arg0: boolean)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set dragonFight(arg0: Internal.EndDragonFight_)
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
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get lastAttacker(): Internal.LivingEntity
        set jumping(arg0: boolean)
        get subEntities(): Internal.EnderDragonPart[]
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
        get fightOrigin(): BlockPos
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
        set fightOrigin(arg0: BlockPos_)
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get flapping(): boolean
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
        get dragonFight(): Internal.EndDragonFight
        get freezing(): boolean
        get fullyFrozen(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        oFlapTime: number;
        nearestCrystal: Internal.EndCrystal;
        flapTime: number;
        static readonly DATA_PHASE: Internal.EntityDataAccessor<number>;
        yRotA: number;
        readonly head: Internal.EnderDragonPart;
        dragonDeathTime: number;
        readonly positions: number[][];
        posPointer: number;
        inWall: boolean;
    }
    type EnderDragon_ = EnderDragon;
    class ScreenEvent$Render$Pre extends Internal.ScreenEvent$Render {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getGuiGraphics(): Internal.GuiGraphics;
        getPartialTick(): number;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        getMouseY(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMouseX(): number;
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
        get guiGraphics(): Internal.GuiGraphics
        get partialTick(): number
        set phase(arg0: Internal.EventPriority_)
        get screen(): Internal.Screen
        get canceled(): boolean
        get mouseY(): number
        get mouseX(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent$Render$Pre_ = ScreenEvent$Render$Pre;
    interface Delayed extends Internal.Comparable<Internal.Delayed> {
        abstract getDelay(arg0: Internal.TimeUnit_): number;
        abstract compareTo(arg0: Internal.Delayed_): number;
    }
    type Delayed_ = Delayed;
    class ChestMenuInventoryClickEvent {
        constructor(slot: Internal.Slot_, type: Internal.ClickType_, button: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        setItem(item: Internal.ItemStack_): void;
        wait(): void;
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        wait(arg0: number): void;
        getIndex(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        set item(item: Internal.ItemStack_)
        get item(): Internal.ItemStack
        get index(): number
        readonly button: number;
        readonly type: Internal.ClickType;
    }
    type ChestMenuInventoryClickEvent_ = ChestMenuInventoryClickEvent;
    interface Double2FloatFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.DoubleUnaryOperator {
        compose(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        composeShort(arg0: Internal.Short2DoubleFunction_): Internal.Short2FloatFunction;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeChar(arg0: Internal.Char2DoubleFunction_): Internal.Char2FloatFunction;
        put(arg0: number, arg1: number): number;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Double2LongFunction;
        composeReference<T>(arg0: Internal.Reference2DoubleFunction_<T>): Internal.Reference2FloatFunction<T>;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Double2DoubleFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Double,java.lang.Float)"(arg0: number, arg1: number): number;
        composeDouble(arg0: Internal.Double2DoubleFunction_): this;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeInt(arg0: Internal.Int2DoubleFunction_): Internal.Int2FloatFunction;
        composeObject<T>(arg0: Internal.Object2DoubleFunction_<T>): Internal.Object2FloatFunction<T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        "andThen(java.util.function.DoubleUnaryOperator)"(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Double2IntFunction;
        containsKey(arg0: number): boolean;
        abstract "get(double)"(arg0: number): number;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Double2ByteFunction;
        identity(): Internal.DoubleUnaryOperator;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Double2ShortFunction;
        "containsKey(double)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        composeLong(arg0: Internal.Long2DoubleFunction_): Internal.Long2FloatFunction;
        "put(double,float)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "remove(double)"(arg0: number): number;
        "getOrDefault(double,float)"(arg0: number, arg1: number): number;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        apply(arg0: number): number;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        abstract get(arg0: number): number;
        composeFloat(arg0: Internal.Float2DoubleFunction_): Internal.Float2FloatFunction;
        defaultReturnValue(): number;
        "compose(java.util.function.DoubleUnaryOperator)"(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Float)"(arg0: any, arg1: number): number;
        applyAsDouble(arg0: number): number;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Double2ObjectFunction<T>;
        size(): number;
        andThen(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        composeByte(arg0: Internal.Byte2DoubleFunction_): Internal.Byte2FloatFunction;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Double2ReferenceFunction<T>;
        clear(): void;
        getOrDefault(arg0: number, arg1: number): number;
    }
    type Double2FloatFunction_ = Double2FloatFunction;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface DomainCombiner {
        abstract combine(arg0: Internal.ProtectionDomain_[], arg1: Internal.ProtectionDomain_[]): Internal.ProtectionDomain[];
        (arg0: Internal.ProtectionDomain[], arg1: Internal.ProtectionDomain[]): Internal.ProtectionDomain_[];
    }
    type DomainCombiner_ = DomainCombiner | ((arg0: Internal.ProtectionDomain[], arg1: Internal.ProtectionDomain[])=> Internal.ProtectionDomain_[]);
    class FilterMask {
        constructor(arg0: number)
        getClass(): typeof any;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.FilterMask;
        toString(): string;
        notifyAll(): void;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        apply(arg0: string): string;
        hashCode(): number;
        applyWithFormatting(arg0: string): Internal.Component;
        wait(): void;
        wait(arg0: number): void;
        setFiltered(arg0: number): void;
        equals(arg0: any): boolean;
        isFullyFiltered(): boolean;
        static write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.FilterMask_): void;
        get class(): typeof any
        get empty(): boolean
        set filtered(arg0: number)
        get fullyFiltered(): boolean
        static readonly CODEC: Internal.Codec<Internal.FilterMask>;
        static readonly FILTERED_STYLE: (Internal.Style) & (Internal.Style);
        static readonly PASS_THROUGH: (Internal.FilterMask) & (Internal.FilterMask);
        static readonly FULLY_FILTERED: (Internal.FilterMask) & (Internal.FilterMask);
    }
    type FilterMask_ = FilterMask;
    class LavaFluid$Flowing extends Internal.LavaFluid {
        constructor()
        getClass(): typeof any;
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        notify(): void;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        getTickDelay(arg0: Internal.LevelReader_): number;
        getSpreadDelay(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.FluidState_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        arch$registryName(): ResourceLocation;
        getDripParticle(): Internal.ParticleOptions;
        getAmount(arg0: Internal.FluidState_): number;
        getSlopeFindDistance(arg0: Internal.LevelReader_): number;
        getSource(arg0: boolean): Internal.FluidState;
        toString(): string;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getFlowing(): Internal.Fluid;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        hashCode(): number;
        getDropOff(arg0: Internal.LevelReader_): number;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        wait(arg0: number): void;
        getSource(): Internal.Fluid;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        get class(): typeof any
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get fluidType(): Internal.FluidType
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get dripParticle(): Internal.ParticleOptions
        get flowing(): Internal.Fluid
        get bucket(): Internal.Item
        get source(): Internal.Fluid
    }
    type LavaFluid$Flowing_ = LavaFluid$Flowing;
    class Hotbar extends Internal.ForwardingList<Internal.ItemStack> {
        constructor()
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        notify(): void;
        static of<E>(arg0: E): Internal.List<E>;
        get(arg0: number): Internal.ItemStack;
        static of<E>(): Internal.List<E>;
        abstract add(arg0: Internal.ItemStack_): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        add(arg0: number, arg1: Internal.ItemStack_): void;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        replaceAll(arg0: Internal.UnaryOperator_<Internal.ItemStack>): void;
        parallelStream(): Internal.Stream<Internal.ItemStack>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        indexOf(arg0: any): number;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        spliterator(): Internal.Spliterator<Internal.ItemStack>;
        "remove(int)"(arg0: number): Internal.ItemStack;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<Internal.ItemStack>): void;
        listIterator(): Internal.ListIterator<Internal.ItemStack>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        removeIf(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        lastIndexOf(arg0: any): number;
        getClass(): typeof any;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        stream(): Internal.Stream<Internal.ItemStack>;
        isEmpty(): boolean;
        set(arg0: number, arg1: Internal.ItemStack_): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        subList(arg0: number, arg1: number): Internal.List<Internal.ItemStack>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        addAll(arg0: number, arg1: Internal.Collection_<Internal.ItemStack>): boolean;
        fromTag(arg0: Internal.ListTag_): void;
        abstract addAll(arg0: Internal.Collection_<Internal.ItemStack>): boolean;
        abstract contains(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        createTag(): Internal.ListTag;
        toString(): string;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract iterator(): Internal.Iterator<Internal.ItemStack>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        remove(arg0: number): Internal.ItemStack;
        abstract toArray(): any[];
        sort(arg0: Internal.Comparator_<Internal.ItemStack>): void;
        hashCode(): number;
        listIterator(arg0: number): Internal.ListIterator<Internal.ItemStack>;
        abstract size(): number;
        abstract clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type Hotbar_ = Hotbar;
    class GameRules implements Internal.GameRulesKJS {
        constructor()
        constructor(arg0: Internal.DynamicLike_<any>)
        getClass(): typeof any;
        set(rule: string, value: string): void;
        toString(): string;
        kjs$getBoolean(rule: string): boolean;
        createTag(): Internal.CompoundTag;
        kjs$getInt(rule: string): number;
        notifyAll(): void;
        getRule<T extends Internal.GameRules$Value<T>>(arg0: Internal.GameRules$Key_<T>): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<T extends Internal.GameRules$Value<T>>(arg0: string, arg1: Internal.GameRules$Category_, arg2: Internal.GameRules$Type_<T>): Internal.GameRules$Key<T>;
        get(rule: string): Internal.GameRules$Value<any>;
        hashCode(): number;
        getBoolean(arg0: Internal.GameRules$Key_<Internal.GameRules$BooleanValue>): boolean;
        static visitGameRuleTypes(arg0: Internal.GameRules$GameRuleTypeVisitor_): void;
        assignFrom(arg0: Internal.GameRules_, arg1: Internal.MinecraftServer_): void;
        wait(): void;
        wait(arg0: number): void;
        kjs$getString(rule: string): string;
        getInt(arg0: Internal.GameRules$Key_<Internal.GameRules$IntegerValue>): number;
        copy(): this;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly RULE_DO_WARDEN_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MAX_COMMAND_CHAIN_LENGTH: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_MOBGRIEFING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FREEZE_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOINSOMNIA: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_DAYLIGHT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_TRADER_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_REDUCEDDEBUGINFO: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_IMMEDIATE_RESPAWN: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOMOBSPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOBLOCKDROPS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_COMMANDBLOCKOUTPUT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_TNT_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_WEATHER_CYCLE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_NATURAL_REGENERATION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FIRE_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FORGIVE_DEAD_PLAYERS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SHOWDEATHMESSAGES: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_PLAYERS_SLEEPING_PERCENTAGE: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_WATER_SOURCE_CONVERSION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FALL_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MOB_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DISABLE_RAIDS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_BLOCK_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LOGADMINCOMMANDS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SPAWN_RADIUS: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_SENDCOMMANDFEEDBACK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SNOW_ACCUMULATION_HEIGHT: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_ANNOUNCE_ADVANCEMENTS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOENTITYDROPS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LAVA_SOURCE_CONVERSION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_PATROL_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_VINES_SPREAD: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly DEFAULT_RANDOM_TICK_SPEED: (3) & (number);
        static readonly RULE_DOFIRETICK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LIMITED_CRAFTING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SPECTATORSGENERATECHUNKS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MAX_ENTITY_CRAMMING: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_DROWNING_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_UNIVERSAL_ANGER: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_GLOBAL_SOUND_EVENTS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_KEEPINVENTORY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOMOBLOOT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_RANDOMTICKING: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
    }
    type GameRules_ = GameRules;
    interface CraftingContainerKJS {
        getMenu(): Internal.AbstractContainerMenu;
        get menu(): Internal.AbstractContainerMenu
    }
    type CraftingContainerKJS_ = CraftingContainerKJS;
    class Instant implements Internal.Comparable<Internal.Instant>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        notify(): void;
        compareTo(arg0: any): number;
        static ofEpochSecond(arg0: number, arg1: number): Internal.Instant;
        plusSeconds(arg0: number): this;
        "with"(arg0: Internal.TemporalAdjuster_): Internal.Temporal;
        plus(arg0: Internal.TemporalAmount_): this;
        "compareTo(java.time.Instant)"(arg0: Internal.Instant_): number;
        "with"(arg0: Internal.TemporalField_, arg1: number): Internal.Temporal;
        isSupported(arg0: Internal.TemporalField_): boolean;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        "isSupported(java.time.temporal.TemporalField)"(arg0: Internal.TemporalField_): boolean;
        static now(arg0: Internal.Clock_): Internal.Instant;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        atOffset(arg0: Internal.ZoneOffset_): Internal.OffsetDateTime;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        plusMillis(arg0: number): this;
        isAfter(arg0: Internal.Instant_): boolean;
        toEpochMilli(): number;
        get(arg0: Internal.TemporalField_): number;
        wait(): void;
        compareTo(arg0: Internal.Instant_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "isSupported(java.time.temporal.TemporalUnit)"(arg0: Internal.TemporalUnit_): boolean;
        minusMillis(arg0: number): this;
        getClass(): typeof any;
        minusSeconds(arg0: number): this;
        static parse(arg0: Internal.CharSequence_): Internal.Instant;
        isBefore(arg0: Internal.Instant_): boolean;
        wait(arg0: number, arg1: number): void;
        static ofEpochSecond(arg0: number): Internal.Instant;
        minus(arg0: Internal.TemporalAmount_): this;
        getLong(arg0: Internal.TemporalField_): number;
        static now(): Internal.Instant;
        static from(arg0: Internal.TemporalAccessor_): Internal.Instant;
        minusNanos(arg0: number): this;
        toString(): string;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        notifyAll(): void;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        getNano(): number;
        getEpochSecond(): number;
        hashCode(): number;
        atZone(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        wait(arg0: number): void;
        plusNanos(arg0: number): this;
        equals(arg0: any): boolean;
        static ofEpochMilli(arg0: number): Internal.Instant;
        get class(): typeof any
        get nano(): number
        get epochSecond(): number
        static readonly EPOCH: (Internal.Instant) & (Internal.Instant);
        static readonly MAX: (Internal.Instant) & (Internal.Instant);
        static readonly MIN: (Internal.Instant) & (Internal.Instant);
    }
    type Instant_ = Instant;
    interface ImmutableStringReader {
        abstract getTotalLength(): number;
        abstract peek(): string;
        abstract getCursor(): number;
        abstract getRead(): string;
        abstract canRead(): boolean;
        abstract getRemainingLength(): number;
        abstract getRemaining(): string;
        abstract canRead(arg0: number): boolean;
        abstract peek(arg0: number): string;
        abstract getString(): string;
        get totalLength(): number
        get cursor(): number
        get read(): string
        get remainingLength(): number
        get remaining(): string
        get string(): string
    }
    type ImmutableStringReader_ = ImmutableStringReader;
    interface SeekableByteChannel extends Internal.ByteChannel {
        abstract write(arg0: Internal.ByteBuffer_): number;
        abstract read(arg0: Internal.ByteBuffer_): number;
        abstract isOpen(): boolean;
        abstract position(): number;
        abstract truncate(arg0: number): this;
        abstract close(): void;
        abstract position(arg0: number): this;
        abstract size(): number;
        get open(): boolean
    }
    type SeekableByteChannel_ = SeekableByteChannel;
    abstract class AbstractTexture implements Internal.AutoCloseable {
        constructor()
        getClass(): typeof any;
        bind(): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setBlurMipmap(arg0: boolean, arg1: boolean): void;
        hashCode(): number;
        restoreLastBlurMipmap(): void;
        abstract load(arg0: Internal.ResourceManager_): void;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        releaseId(): void;
        setFilter(arg0: boolean, arg1: boolean): void;
        reset(arg0: Internal.TextureManager_, arg1: Internal.ResourceManager_, arg2: ResourceLocation_, arg3: Internal.Executor_): void;
        equals(arg0: any): boolean;
        getId(): number;
        get class(): typeof any
        get id(): number
        static readonly NOT_ASSIGNED: (-1) & (number);
    }
    type AbstractTexture_ = AbstractTexture;
    interface ShortSpliterator extends Internal.Spliterator$OfPrimitive<number, Internal.ShortConsumer, Internal.ShortSpliterator> {
        /**
         * @deprecated
        */
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        getComparator(): Internal.Comparator<any>;
        abstract tryAdvance(arg0: Internal.ShortConsumer_): boolean;
        hasCharacteristics(arg0: number): boolean;
        skip(arg0: number): number;
        abstract estimateSize(): number;
        forEachRemaining(arg0: Internal.ShortConsumer_): void;
        /**
         * @deprecated
        */
        "tryAdvance(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): boolean;
        trySplit(): Internal.Spliterator$OfPrimitive<any, any, any>;
        "forEachRemaining(it.unimi.dsi.fastutil.shorts.ShortConsumer)"(arg0: Internal.ShortConsumer_): void;
        getExactSizeIfKnown(): number;
        abstract "tryAdvance(it.unimi.dsi.fastutil.shorts.ShortConsumer)"(arg0: Internal.ShortConsumer_): boolean;
        /**
         * @deprecated
        */
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        abstract characteristics(): number;
        get comparator(): Internal.Comparator<any>
        get exactSizeIfKnown(): number
    }
    type ShortSpliterator_ = ShortSpliterator;
    abstract class GrowingPlantHeadBlock extends Internal.GrowingPlantBlock implements Internal.BonemealableBlock {
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
        isMaxAge(arg0: Internal.BlockState_): boolean;
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
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        "getStateForPlacement(net.minecraft.world.level.LevelAccessor)"(arg0: Internal.LevelAccessor_): Internal.BlockState;
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
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getMaxAgeState(arg0: Internal.BlockState_): Internal.BlockState;
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
        getStateForPlacement(arg0: Internal.LevelAccessor_): Internal.BlockState;
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
        "getStateForPlacement(net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
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
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly MAX_AGE: (25) & (number);
    }
    type GrowingPlantHeadBlock_ = GrowingPlantHeadBlock;
    class ModifiableBiomeInfo$BiomeInfo$Builder {
        getClimateSettings(): Internal.ClimateSettingsBuilder;
        getClass(): typeof any;
        toString(): string;
        getMobSpawnSettings(): Internal.MobSpawnSettingsBuilder;
        notifyAll(): void;
        static copyOf(arg0: Internal.ModifiableBiomeInfo$BiomeInfo_): Internal.ModifiableBiomeInfo$BiomeInfo$Builder;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getGenerationSettings(): Internal.BiomeGenerationSettingsBuilder;
        equals(arg0: any): boolean;
        getSpecialEffects(): Internal.BiomeSpecialEffectsBuilder;
        build(): Internal.ModifiableBiomeInfo$BiomeInfo;
        get climateSettings(): Internal.ClimateSettingsBuilder
        get class(): typeof any
        get mobSpawnSettings(): Internal.MobSpawnSettingsBuilder
        get generationSettings(): Internal.BiomeGenerationSettingsBuilder
        get specialEffects(): Internal.BiomeSpecialEffectsBuilder
    }
    type ModifiableBiomeInfo$BiomeInfo$Builder_ = ModifiableBiomeInfo$BiomeInfo$Builder;
    class CountingMap {
        constructor()
        add(key: any, value: number): number;
        getClass(): typeof any;
        set(key: any, value: number): number;
        getValues(): Internal.Collection<number>;
        toString(): string;
        notifyAll(): void;
        getTotalCount(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        forEach(forEach: Internal.Consumer_<Internal.Object2LongEntry>): void;
        get(key: any): number;
        getSize(): number;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getEntries(): Internal.List<Internal.Object2LongEntry>;
        getKeys(): Internal.Set<any>;
        get class(): typeof any
        get values(): Internal.Collection<number>
        get totalCount(): number
        get size(): number
        get entries(): Internal.List<Internal.Object2LongEntry>
        get keys(): Internal.Set<any>
    }
    type CountingMap_ = CountingMap;
    class RealmsNotification {
        getClass(): typeof any;
        dismissable(): boolean;
        toString(): string;
        notifyAll(): void;
        uuid(): Internal.UUID;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static parseList(arg0: string): Internal.List<Internal.RealmsNotification>;
        hashCode(): number;
        wait(): void;
        seen(): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type RealmsNotification_ = RealmsNotification;
    abstract class EntityRenderersEvent extends Internal.Event implements Internal.IModBusEvent {
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
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type EntityRenderersEvent_ = EntityRenderersEvent;
    class KeyDispatchDataCodec <A> extends Internal.Record {
        constructor(arg0: Internal.Codec_<A>)
        codec(): Internal.Codec<A>;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static "of(com.mojang.serialization.Codec)"<A>(arg0: Internal.Codec_<A>): Internal.KeyDispatchDataCodec<A>;
        static of<A>(arg0: Internal.Codec_<A>): Internal.KeyDispatchDataCodec<A>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        static of<A>(arg0: Internal.MapCodec_<A>): Internal.KeyDispatchDataCodec<A>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static "of(com.mojang.serialization.MapCodec)"<A>(arg0: Internal.MapCodec_<A>): Internal.KeyDispatchDataCodec<A>;
        get class(): typeof any
    }
    type KeyDispatchDataCodec_<A> = KeyDispatchDataCodec<A>;
    interface BucketPickup extends Internal.IForgeBucketPickup {
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        abstract pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        /**
         * @deprecated
        */
        abstract getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
    }
    type BucketPickup_ = BucketPickup;
    class EnumGetMethod extends Internal.Enum<Internal.EnumGetMethod> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.EnumGetMethod>>;
        "compareTo(com.electronwill.nightconfig.core.EnumGetMethod)"(arg0: Internal.EnumGetMethod_): number;
        toString(): string;
        isCaseSensitive(): boolean;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.EnumGetMethod;
        validate<T extends Internal.Enum<T>>(arg0: any, arg1: T): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get<T extends Internal.Enum<T>>(arg0: any, arg1: T): T;
        compareTo(arg0: any): number;
        name(): string;
        static values(): Internal.EnumGetMethod[];
        hashCode(): number;
        compareTo(arg0: Internal.EnumGetMethod_): number;
        ordinal(): number;
        wait(): void;
        isOrdinalOk(): boolean;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.EnumGetMethod;
        get class(): typeof any
        get caseSensitive(): boolean
        get ordinalOk(): boolean
        get declaringClass(): typeof Internal.EnumGetMethod
        static readonly ORDINAL_OR_NAME: (Internal.EnumGetMethod) & (Internal.EnumGetMethod);
        static readonly NAME: (Internal.EnumGetMethod) & (Internal.EnumGetMethod);
        static readonly NAME_IGNORECASE: (Internal.EnumGetMethod) & (Internal.EnumGetMethod);
        static readonly ORDINAL_OR_NAME_IGNORECASE: (Internal.EnumGetMethod) & (Internal.EnumGetMethod);
    }
    type EnumGetMethod_ = "name" | "ordinal_or_name" | EnumGetMethod | "ordinal_or_name_ignorecase" | "name_ignorecase";
    interface IEventBus {
        abstract unregister(arg0: any): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: boolean, arg2: Internal.Consumer_<T>): void;
        abstract post(arg0: Internal.Event_): boolean;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: Internal.Consumer_<T>): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.Consumer_<T>): void;
        abstract post(arg0: Internal.Event_, arg1: Internal.IEventBusInvokeDispatcher_): boolean;
        abstract register(arg0: any): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: boolean, arg3: Internal.Consumer_<T>): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: boolean, arg3: T, arg4: Internal.Consumer_<T>): void;
        abstract shutdown(): void;
        abstract start(): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: Internal.Consumer_<T>): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: boolean, arg2: T, arg3: Internal.Consumer_<T>): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.Consumer_<T>): void;
    }
    type IEventBus_ = IEventBus;
    class PooledByteBufAllocatorMetric implements Internal.ByteBufAllocatorMetric {
        getClass(): typeof any;
        directArenas(): Internal.List<Internal.PoolArenaMetric>;
        numDirectArenas(): number;
        toString(): string;
        numHeapArenas(): number;
        smallCacheSize(): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        tinyCacheSize(): number;
        heapArenas(): Internal.List<Internal.PoolArenaMetric>;
        hashCode(): number;
        chunkSize(): number;
        wait(): void;
        usedHeapMemory(): number;
        numThreadLocalCaches(): number;
        usedDirectMemory(): number;
        wait(arg0: number): void;
        normalCacheSize(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type PooledByteBufAllocatorMetric_ = PooledByteBufAllocatorMetric;
}
