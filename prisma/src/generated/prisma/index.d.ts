
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model ActionRequest
 * 
 */
export type ActionRequest = $Result.DefaultSelection<Prisma.$ActionRequestPayload>
/**
 * Model Approval
 * 
 */
export type Approval = $Result.DefaultSelection<Prisma.$ApprovalPayload>
/**
 * Model Execution
 * 
 */
export type Execution = $Result.DefaultSelection<Prisma.$ExecutionPayload>
/**
 * Model AuditEvent
 * 
 */
export type AuditEvent = $Result.DefaultSelection<Prisma.$AuditEventPayload>
/**
 * Model UsageCounter
 * 
 */
export type UsageCounter = $Result.DefaultSelection<Prisma.$UsageCounterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionRequest`: Exposes CRUD operations for the **ActionRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionRequests
    * const actionRequests = await prisma.actionRequest.findMany()
    * ```
    */
  get actionRequest(): Prisma.ActionRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approval`: Exposes CRUD operations for the **Approval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Approvals
    * const approvals = await prisma.approval.findMany()
    * ```
    */
  get approval(): Prisma.ApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.execution`: Exposes CRUD operations for the **Execution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Executions
    * const executions = await prisma.execution.findMany()
    * ```
    */
  get execution(): Prisma.ExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditEvent`: Exposes CRUD operations for the **AuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditEvents
    * const auditEvents = await prisma.auditEvent.findMany()
    * ```
    */
  get auditEvent(): Prisma.AuditEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageCounter`: Exposes CRUD operations for the **UsageCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageCounters
    * const usageCounters = await prisma.usageCounter.findMany()
    * ```
    */
  get usageCounter(): Prisma.UsageCounterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    User: 'User',
    Agent: 'Agent',
    Policy: 'Policy',
    ActionRequest: 'ActionRequest',
    Approval: 'Approval',
    Execution: 'Execution',
    AuditEvent: 'AuditEvent',
    UsageCounter: 'UsageCounter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "user" | "agent" | "policy" | "actionRequest" | "approval" | "execution" | "auditEvent" | "usageCounter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      ActionRequest: {
        payload: Prisma.$ActionRequestPayload<ExtArgs>
        fields: Prisma.ActionRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>
          }
          findFirst: {
            args: Prisma.ActionRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>
          }
          findMany: {
            args: Prisma.ActionRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>[]
          }
          create: {
            args: Prisma.ActionRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>
          }
          createMany: {
            args: Prisma.ActionRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>[]
          }
          delete: {
            args: Prisma.ActionRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>
          }
          update: {
            args: Prisma.ActionRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>
          }
          deleteMany: {
            args: Prisma.ActionRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>[]
          }
          upsert: {
            args: Prisma.ActionRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionRequestPayload>
          }
          aggregate: {
            args: Prisma.ActionRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionRequest>
          }
          groupBy: {
            args: Prisma.ActionRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ActionRequestCountAggregateOutputType> | number
          }
        }
      }
      Approval: {
        payload: Prisma.$ApprovalPayload<ExtArgs>
        fields: Prisma.ApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findFirst: {
            args: Prisma.ApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findMany: {
            args: Prisma.ApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          create: {
            args: Prisma.ApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          createMany: {
            args: Prisma.ApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          delete: {
            args: Prisma.ApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          update: {
            args: Prisma.ApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          aggregate: {
            args: Prisma.ApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApproval>
          }
          groupBy: {
            args: Prisma.ApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalCountAggregateOutputType> | number
          }
        }
      }
      Execution: {
        payload: Prisma.$ExecutionPayload<ExtArgs>
        fields: Prisma.ExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          findFirst: {
            args: Prisma.ExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          findMany: {
            args: Prisma.ExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>[]
          }
          create: {
            args: Prisma.ExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          createMany: {
            args: Prisma.ExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>[]
          }
          delete: {
            args: Prisma.ExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          update: {
            args: Prisma.ExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          aggregate: {
            args: Prisma.ExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecution>
          }
          groupBy: {
            args: Prisma.ExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionCountAggregateOutputType> | number
          }
        }
      }
      AuditEvent: {
        payload: Prisma.$AuditEventPayload<ExtArgs>
        fields: Prisma.AuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findFirst: {
            args: Prisma.AuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findMany: {
            args: Prisma.AuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          create: {
            args: Prisma.AuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          createMany: {
            args: Prisma.AuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          delete: {
            args: Prisma.AuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          update: {
            args: Prisma.AuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          deleteMany: {
            args: Prisma.AuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          upsert: {
            args: Prisma.AuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          aggregate: {
            args: Prisma.AuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditEvent>
          }
          groupBy: {
            args: Prisma.AuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<AuditEventCountAggregateOutputType> | number
          }
        }
      }
      UsageCounter: {
        payload: Prisma.$UsageCounterPayload<ExtArgs>
        fields: Prisma.UsageCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          findFirst: {
            args: Prisma.UsageCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          findMany: {
            args: Prisma.UsageCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>[]
          }
          create: {
            args: Prisma.UsageCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          createMany: {
            args: Prisma.UsageCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>[]
          }
          delete: {
            args: Prisma.UsageCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          update: {
            args: Prisma.UsageCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          deleteMany: {
            args: Prisma.UsageCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageCounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>[]
          }
          upsert: {
            args: Prisma.UsageCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          aggregate: {
            args: Prisma.UsageCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageCounter>
          }
          groupBy: {
            args: Prisma.UsageCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageCounterCountArgs<ExtArgs>
            result: $Utils.Optional<UsageCounterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    user?: UserOmit
    agent?: AgentOmit
    policy?: PolicyOmit
    actionRequest?: ActionRequestOmit
    approval?: ApprovalOmit
    execution?: ExecutionOmit
    auditEvent?: AuditEventOmit
    usageCounter?: UsageCounterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    agents: number
    policies: number
    actionRequests: number
    approvals: number
    executions: number
    auditEvents: number
    usageCounters: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    agents?: boolean | OrganizationCountOutputTypeCountAgentsArgs
    policies?: boolean | OrganizationCountOutputTypeCountPoliciesArgs
    actionRequests?: boolean | OrganizationCountOutputTypeCountActionRequestsArgs
    approvals?: boolean | OrganizationCountOutputTypeCountApprovalsArgs
    executions?: boolean | OrganizationCountOutputTypeCountExecutionsArgs
    auditEvents?: boolean | OrganizationCountOutputTypeCountAuditEventsArgs
    usageCounters?: boolean | OrganizationCountOutputTypeCountUsageCountersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountActionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionRequestWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAuditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsageCountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageCounterWhereInput
  }


  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    actionRequests: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionRequests?: boolean | AgentCountOutputTypeCountActionRequestsArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountActionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionRequestWhereInput
  }


  /**
   * Count Type PolicyCountOutputType
   */

  export type PolicyCountOutputType = {
    actionRequests: number
  }

  export type PolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionRequests?: boolean | PolicyCountOutputTypeCountActionRequestsArgs
  }

  // Custom InputTypes
  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     */
    select?: PolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountActionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionRequestWhereInput
  }


  /**
   * Count Type ActionRequestCountOutputType
   */

  export type ActionRequestCountOutputType = {
    auditEvents: number
  }

  export type ActionRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditEvents?: boolean | ActionRequestCountOutputTypeCountAuditEventsArgs
  }

  // Custom InputTypes
  /**
   * ActionRequestCountOutputType without action
   */
  export type ActionRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequestCountOutputType
     */
    select?: ActionRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActionRequestCountOutputType without action
   */
  export type ActionRequestCountOutputTypeCountAuditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    apiKey: string | null
    plan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    apiKey: string | null
    plan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    apiKey: number
    plan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    apiKey?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    apiKey?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    apiKey?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    slug: string
    apiKey: string
    plan: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    apiKey?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    agents?: boolean | Organization$agentsArgs<ExtArgs>
    policies?: boolean | Organization$policiesArgs<ExtArgs>
    actionRequests?: boolean | Organization$actionRequestsArgs<ExtArgs>
    approvals?: boolean | Organization$approvalsArgs<ExtArgs>
    executions?: boolean | Organization$executionsArgs<ExtArgs>
    auditEvents?: boolean | Organization$auditEventsArgs<ExtArgs>
    usageCounters?: boolean | Organization$usageCountersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    apiKey?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    apiKey?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    apiKey?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "apiKey" | "plan" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    agents?: boolean | Organization$agentsArgs<ExtArgs>
    policies?: boolean | Organization$policiesArgs<ExtArgs>
    actionRequests?: boolean | Organization$actionRequestsArgs<ExtArgs>
    approvals?: boolean | Organization$approvalsArgs<ExtArgs>
    executions?: boolean | Organization$executionsArgs<ExtArgs>
    auditEvents?: boolean | Organization$auditEventsArgs<ExtArgs>
    usageCounters?: boolean | Organization$usageCountersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      agents: Prisma.$AgentPayload<ExtArgs>[]
      policies: Prisma.$PolicyPayload<ExtArgs>[]
      actionRequests: Prisma.$ActionRequestPayload<ExtArgs>[]
      approvals: Prisma.$ApprovalPayload<ExtArgs>[]
      executions: Prisma.$ExecutionPayload<ExtArgs>[]
      auditEvents: Prisma.$AuditEventPayload<ExtArgs>[]
      usageCounters: Prisma.$UsageCounterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      apiKey: string
      plan: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agents<T extends Organization$agentsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    policies<T extends Organization$policiesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actionRequests<T extends Organization$actionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$actionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvals<T extends Organization$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    executions<T extends Organization$executionsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditEvents<T extends Organization$auditEventsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$auditEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageCounters<T extends Organization$usageCountersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usageCountersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly apiKey: FieldRef<"Organization", 'String'>
    readonly plan: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.agents
   */
  export type Organization$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Organization.policies
   */
  export type Organization$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    cursor?: PolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Organization.actionRequests
   */
  export type Organization$actionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    where?: ActionRequestWhereInput
    orderBy?: ActionRequestOrderByWithRelationInput | ActionRequestOrderByWithRelationInput[]
    cursor?: ActionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionRequestScalarFieldEnum | ActionRequestScalarFieldEnum[]
  }

  /**
   * Organization.approvals
   */
  export type Organization$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Organization.executions
   */
  export type Organization$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    where?: ExecutionWhereInput
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    cursor?: ExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }

  /**
   * Organization.auditEvents
   */
  export type Organization$auditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    cursor?: AuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * Organization.usageCounters
   */
  export type Organization$usageCountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    where?: UsageCounterWhereInput
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    cursor?: UsageCounterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageCounterScalarFieldEnum | UsageCounterScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    clerkId: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    clerkId: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    orgId: number
    clerkId: number
    email: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    orgId?: true
    clerkId?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    orgId?: true
    clerkId?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    orgId?: true
    clerkId?: true
    email?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    orgId: string
    clerkId: string
    email: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    orgId?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "clerkId" | "email" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      clerkId: string
      email: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly orgId: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    apiKey: string | null
    status: string | null
    createdAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    apiKey: string | null
    status: string | null
    createdAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    description: number
    apiKey: number
    status: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    apiKey?: true
    status?: true
    createdAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    apiKey?: true
    status?: true
    createdAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    apiKey?: true
    status?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    orgId: string
    name: string
    description: string | null
    apiKey: string
    status: string
    metadata: JsonValue | null
    createdAt: Date
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    apiKey?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequests?: boolean | Agent$actionRequestsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    apiKey?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    apiKey?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    apiKey?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "description" | "apiKey" | "status" | "metadata" | "createdAt", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequests?: boolean | Agent$actionRequestsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      actionRequests: Prisma.$ActionRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      description: string | null
      apiKey: string
      status: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actionRequests<T extends Agent$actionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$actionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly orgId: FieldRef<"Agent", 'String'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly description: FieldRef<"Agent", 'String'>
    readonly apiKey: FieldRef<"Agent", 'String'>
    readonly status: FieldRef<"Agent", 'String'>
    readonly metadata: FieldRef<"Agent", 'Json'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.actionRequests
   */
  export type Agent$actionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    where?: ActionRequestWhereInput
    orderBy?: ActionRequestOrderByWithRelationInput | ActionRequestOrderByWithRelationInput[]
    cursor?: ActionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionRequestScalarFieldEnum | ActionRequestScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    priority: number | null
  }

  export type PolicySumAggregateOutputType = {
    priority: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    priority: number | null
    enabled: boolean | null
    createdAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    priority: number | null
    enabled: boolean | null
    createdAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    rules: number
    priority: number
    enabled: number
    createdAt: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    priority?: true
  }

  export type PolicySumAggregateInputType = {
    priority?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    priority?: true
    enabled?: true
    createdAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    priority?: true
    enabled?: true
    createdAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    rules?: true
    priority?: true
    enabled?: true
    createdAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: string
    orgId: string
    name: string
    rules: JsonValue
    priority: number
    enabled: boolean
    createdAt: Date
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    rules?: boolean
    priority?: boolean
    enabled?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequests?: boolean | Policy$actionRequestsArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    rules?: boolean
    priority?: boolean
    enabled?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    rules?: boolean
    priority?: boolean
    enabled?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    rules?: boolean
    priority?: boolean
    enabled?: boolean
    createdAt?: boolean
  }

  export type PolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "rules" | "priority" | "enabled" | "createdAt", ExtArgs["result"]["policy"]>
  export type PolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequests?: boolean | Policy$actionRequestsArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      actionRequests: Prisma.$ActionRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      rules: Prisma.JsonValue
      priority: number
      enabled: boolean
      createdAt: Date
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies and returns the data updated in the database.
     * @param {PolicyUpdateManyAndReturnArgs} args - Arguments to update many Policies.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actionRequests<T extends Policy$actionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Policy$actionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Policy model
   */
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'String'>
    readonly orgId: FieldRef<"Policy", 'String'>
    readonly name: FieldRef<"Policy", 'String'>
    readonly rules: FieldRef<"Policy", 'Json'>
    readonly priority: FieldRef<"Policy", 'Int'>
    readonly enabled: FieldRef<"Policy", 'Boolean'>
    readonly createdAt: FieldRef<"Policy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policy updateManyAndReturn
   */
  export type PolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to delete.
     */
    limit?: number
  }

  /**
   * Policy.actionRequests
   */
  export type Policy$actionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    where?: ActionRequestWhereInput
    orderBy?: ActionRequestOrderByWithRelationInput | ActionRequestOrderByWithRelationInput[]
    cursor?: ActionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionRequestScalarFieldEnum | ActionRequestScalarFieldEnum[]
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
  }


  /**
   * Model ActionRequest
   */

  export type AggregateActionRequest = {
    _count: ActionRequestCountAggregateOutputType | null
    _avg: ActionRequestAvgAggregateOutputType | null
    _sum: ActionRequestSumAggregateOutputType | null
    _min: ActionRequestMinAggregateOutputType | null
    _max: ActionRequestMaxAggregateOutputType | null
  }

  export type ActionRequestAvgAggregateOutputType = {
    riskScore: number | null
  }

  export type ActionRequestSumAggregateOutputType = {
    riskScore: number | null
  }

  export type ActionRequestMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    agentId: string | null
    actionType: string | null
    riskScore: number | null
    decision: string | null
    policyId: string | null
    traceId: string | null
    createdAt: Date | null
  }

  export type ActionRequestMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    agentId: string | null
    actionType: string | null
    riskScore: number | null
    decision: string | null
    policyId: string | null
    traceId: string | null
    createdAt: Date | null
  }

  export type ActionRequestCountAggregateOutputType = {
    id: number
    orgId: number
    agentId: number
    actionType: number
    payload: number
    riskScore: number
    decision: number
    policyId: number
    traceId: number
    createdAt: number
    _all: number
  }


  export type ActionRequestAvgAggregateInputType = {
    riskScore?: true
  }

  export type ActionRequestSumAggregateInputType = {
    riskScore?: true
  }

  export type ActionRequestMinAggregateInputType = {
    id?: true
    orgId?: true
    agentId?: true
    actionType?: true
    riskScore?: true
    decision?: true
    policyId?: true
    traceId?: true
    createdAt?: true
  }

  export type ActionRequestMaxAggregateInputType = {
    id?: true
    orgId?: true
    agentId?: true
    actionType?: true
    riskScore?: true
    decision?: true
    policyId?: true
    traceId?: true
    createdAt?: true
  }

  export type ActionRequestCountAggregateInputType = {
    id?: true
    orgId?: true
    agentId?: true
    actionType?: true
    payload?: true
    riskScore?: true
    decision?: true
    policyId?: true
    traceId?: true
    createdAt?: true
    _all?: true
  }

  export type ActionRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionRequest to aggregate.
     */
    where?: ActionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionRequests to fetch.
     */
    orderBy?: ActionRequestOrderByWithRelationInput | ActionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionRequests
    **/
    _count?: true | ActionRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionRequestMaxAggregateInputType
  }

  export type GetActionRequestAggregateType<T extends ActionRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateActionRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionRequest[P]>
      : GetScalarType<T[P], AggregateActionRequest[P]>
  }




  export type ActionRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionRequestWhereInput
    orderBy?: ActionRequestOrderByWithAggregationInput | ActionRequestOrderByWithAggregationInput[]
    by: ActionRequestScalarFieldEnum[] | ActionRequestScalarFieldEnum
    having?: ActionRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionRequestCountAggregateInputType | true
    _avg?: ActionRequestAvgAggregateInputType
    _sum?: ActionRequestSumAggregateInputType
    _min?: ActionRequestMinAggregateInputType
    _max?: ActionRequestMaxAggregateInputType
  }

  export type ActionRequestGroupByOutputType = {
    id: string
    orgId: string
    agentId: string
    actionType: string
    payload: JsonValue
    riskScore: number
    decision: string
    policyId: string | null
    traceId: string
    createdAt: Date
    _count: ActionRequestCountAggregateOutputType | null
    _avg: ActionRequestAvgAggregateOutputType | null
    _sum: ActionRequestSumAggregateOutputType | null
    _min: ActionRequestMinAggregateOutputType | null
    _max: ActionRequestMaxAggregateOutputType | null
  }

  type GetActionRequestGroupByPayload<T extends ActionRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ActionRequestGroupByOutputType[P]>
        }
      >
    >


  export type ActionRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    agentId?: boolean
    actionType?: boolean
    payload?: boolean
    riskScore?: boolean
    decision?: boolean
    policyId?: boolean
    traceId?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    policy?: boolean | ActionRequest$policyArgs<ExtArgs>
    approval?: boolean | ActionRequest$approvalArgs<ExtArgs>
    execution?: boolean | ActionRequest$executionArgs<ExtArgs>
    auditEvents?: boolean | ActionRequest$auditEventsArgs<ExtArgs>
    _count?: boolean | ActionRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionRequest"]>

  export type ActionRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    agentId?: boolean
    actionType?: boolean
    payload?: boolean
    riskScore?: boolean
    decision?: boolean
    policyId?: boolean
    traceId?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    policy?: boolean | ActionRequest$policyArgs<ExtArgs>
  }, ExtArgs["result"]["actionRequest"]>

  export type ActionRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    agentId?: boolean
    actionType?: boolean
    payload?: boolean
    riskScore?: boolean
    decision?: boolean
    policyId?: boolean
    traceId?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    policy?: boolean | ActionRequest$policyArgs<ExtArgs>
  }, ExtArgs["result"]["actionRequest"]>

  export type ActionRequestSelectScalar = {
    id?: boolean
    orgId?: boolean
    agentId?: boolean
    actionType?: boolean
    payload?: boolean
    riskScore?: boolean
    decision?: boolean
    policyId?: boolean
    traceId?: boolean
    createdAt?: boolean
  }

  export type ActionRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "agentId" | "actionType" | "payload" | "riskScore" | "decision" | "policyId" | "traceId" | "createdAt", ExtArgs["result"]["actionRequest"]>
  export type ActionRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    policy?: boolean | ActionRequest$policyArgs<ExtArgs>
    approval?: boolean | ActionRequest$approvalArgs<ExtArgs>
    execution?: boolean | ActionRequest$executionArgs<ExtArgs>
    auditEvents?: boolean | ActionRequest$auditEventsArgs<ExtArgs>
    _count?: boolean | ActionRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActionRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    policy?: boolean | ActionRequest$policyArgs<ExtArgs>
  }
  export type ActionRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    policy?: boolean | ActionRequest$policyArgs<ExtArgs>
  }

  export type $ActionRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionRequest"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      agent: Prisma.$AgentPayload<ExtArgs>
      policy: Prisma.$PolicyPayload<ExtArgs> | null
      approval: Prisma.$ApprovalPayload<ExtArgs> | null
      execution: Prisma.$ExecutionPayload<ExtArgs> | null
      auditEvents: Prisma.$AuditEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      agentId: string
      actionType: string
      payload: Prisma.JsonValue
      riskScore: number
      decision: string
      policyId: string | null
      traceId: string
      createdAt: Date
    }, ExtArgs["result"]["actionRequest"]>
    composites: {}
  }

  type ActionRequestGetPayload<S extends boolean | null | undefined | ActionRequestDefaultArgs> = $Result.GetResult<Prisma.$ActionRequestPayload, S>

  type ActionRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionRequestCountAggregateInputType | true
    }

  export interface ActionRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionRequest'], meta: { name: 'ActionRequest' } }
    /**
     * Find zero or one ActionRequest that matches the filter.
     * @param {ActionRequestFindUniqueArgs} args - Arguments to find a ActionRequest
     * @example
     * // Get one ActionRequest
     * const actionRequest = await prisma.actionRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionRequestFindUniqueArgs>(args: SelectSubset<T, ActionRequestFindUniqueArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionRequestFindUniqueOrThrowArgs} args - Arguments to find a ActionRequest
     * @example
     * // Get one ActionRequest
     * const actionRequest = await prisma.actionRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionRequestFindFirstArgs} args - Arguments to find a ActionRequest
     * @example
     * // Get one ActionRequest
     * const actionRequest = await prisma.actionRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionRequestFindFirstArgs>(args?: SelectSubset<T, ActionRequestFindFirstArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionRequestFindFirstOrThrowArgs} args - Arguments to find a ActionRequest
     * @example
     * // Get one ActionRequest
     * const actionRequest = await prisma.actionRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionRequests
     * const actionRequests = await prisma.actionRequest.findMany()
     * 
     * // Get first 10 ActionRequests
     * const actionRequests = await prisma.actionRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionRequestWithIdOnly = await prisma.actionRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionRequestFindManyArgs>(args?: SelectSubset<T, ActionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionRequest.
     * @param {ActionRequestCreateArgs} args - Arguments to create a ActionRequest.
     * @example
     * // Create one ActionRequest
     * const ActionRequest = await prisma.actionRequest.create({
     *   data: {
     *     // ... data to create a ActionRequest
     *   }
     * })
     * 
     */
    create<T extends ActionRequestCreateArgs>(args: SelectSubset<T, ActionRequestCreateArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionRequests.
     * @param {ActionRequestCreateManyArgs} args - Arguments to create many ActionRequests.
     * @example
     * // Create many ActionRequests
     * const actionRequest = await prisma.actionRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionRequestCreateManyArgs>(args?: SelectSubset<T, ActionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionRequests and returns the data saved in the database.
     * @param {ActionRequestCreateManyAndReturnArgs} args - Arguments to create many ActionRequests.
     * @example
     * // Create many ActionRequests
     * const actionRequest = await prisma.actionRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionRequests and only return the `id`
     * const actionRequestWithIdOnly = await prisma.actionRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionRequest.
     * @param {ActionRequestDeleteArgs} args - Arguments to delete one ActionRequest.
     * @example
     * // Delete one ActionRequest
     * const ActionRequest = await prisma.actionRequest.delete({
     *   where: {
     *     // ... filter to delete one ActionRequest
     *   }
     * })
     * 
     */
    delete<T extends ActionRequestDeleteArgs>(args: SelectSubset<T, ActionRequestDeleteArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionRequest.
     * @param {ActionRequestUpdateArgs} args - Arguments to update one ActionRequest.
     * @example
     * // Update one ActionRequest
     * const actionRequest = await prisma.actionRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionRequestUpdateArgs>(args: SelectSubset<T, ActionRequestUpdateArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionRequests.
     * @param {ActionRequestDeleteManyArgs} args - Arguments to filter ActionRequests to delete.
     * @example
     * // Delete a few ActionRequests
     * const { count } = await prisma.actionRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionRequestDeleteManyArgs>(args?: SelectSubset<T, ActionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionRequests
     * const actionRequest = await prisma.actionRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionRequestUpdateManyArgs>(args: SelectSubset<T, ActionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionRequests and returns the data updated in the database.
     * @param {ActionRequestUpdateManyAndReturnArgs} args - Arguments to update many ActionRequests.
     * @example
     * // Update many ActionRequests
     * const actionRequest = await prisma.actionRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionRequests and only return the `id`
     * const actionRequestWithIdOnly = await prisma.actionRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionRequest.
     * @param {ActionRequestUpsertArgs} args - Arguments to update or create a ActionRequest.
     * @example
     * // Update or create a ActionRequest
     * const actionRequest = await prisma.actionRequest.upsert({
     *   create: {
     *     // ... data to create a ActionRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionRequest we want to update
     *   }
     * })
     */
    upsert<T extends ActionRequestUpsertArgs>(args: SelectSubset<T, ActionRequestUpsertArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionRequestCountArgs} args - Arguments to filter ActionRequests to count.
     * @example
     * // Count the number of ActionRequests
     * const count = await prisma.actionRequest.count({
     *   where: {
     *     // ... the filter for the ActionRequests we want to count
     *   }
     * })
    **/
    count<T extends ActionRequestCountArgs>(
      args?: Subset<T, ActionRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionRequestAggregateArgs>(args: Subset<T, ActionRequestAggregateArgs>): Prisma.PrismaPromise<GetActionRequestAggregateType<T>>

    /**
     * Group by ActionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionRequestGroupByArgs['orderBy'] }
        : { orderBy?: ActionRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionRequest model
   */
  readonly fields: ActionRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    policy<T extends ActionRequest$policyArgs<ExtArgs> = {}>(args?: Subset<T, ActionRequest$policyArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approval<T extends ActionRequest$approvalArgs<ExtArgs> = {}>(args?: Subset<T, ActionRequest$approvalArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    execution<T extends ActionRequest$executionArgs<ExtArgs> = {}>(args?: Subset<T, ActionRequest$executionArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditEvents<T extends ActionRequest$auditEventsArgs<ExtArgs> = {}>(args?: Subset<T, ActionRequest$auditEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActionRequest model
   */
  interface ActionRequestFieldRefs {
    readonly id: FieldRef<"ActionRequest", 'String'>
    readonly orgId: FieldRef<"ActionRequest", 'String'>
    readonly agentId: FieldRef<"ActionRequest", 'String'>
    readonly actionType: FieldRef<"ActionRequest", 'String'>
    readonly payload: FieldRef<"ActionRequest", 'Json'>
    readonly riskScore: FieldRef<"ActionRequest", 'Float'>
    readonly decision: FieldRef<"ActionRequest", 'String'>
    readonly policyId: FieldRef<"ActionRequest", 'String'>
    readonly traceId: FieldRef<"ActionRequest", 'String'>
    readonly createdAt: FieldRef<"ActionRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActionRequest findUnique
   */
  export type ActionRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActionRequest to fetch.
     */
    where: ActionRequestWhereUniqueInput
  }

  /**
   * ActionRequest findUniqueOrThrow
   */
  export type ActionRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActionRequest to fetch.
     */
    where: ActionRequestWhereUniqueInput
  }

  /**
   * ActionRequest findFirst
   */
  export type ActionRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActionRequest to fetch.
     */
    where?: ActionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionRequests to fetch.
     */
    orderBy?: ActionRequestOrderByWithRelationInput | ActionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionRequests.
     */
    cursor?: ActionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionRequests.
     */
    distinct?: ActionRequestScalarFieldEnum | ActionRequestScalarFieldEnum[]
  }

  /**
   * ActionRequest findFirstOrThrow
   */
  export type ActionRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActionRequest to fetch.
     */
    where?: ActionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionRequests to fetch.
     */
    orderBy?: ActionRequestOrderByWithRelationInput | ActionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionRequests.
     */
    cursor?: ActionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionRequests.
     */
    distinct?: ActionRequestScalarFieldEnum | ActionRequestScalarFieldEnum[]
  }

  /**
   * ActionRequest findMany
   */
  export type ActionRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ActionRequests to fetch.
     */
    where?: ActionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionRequests to fetch.
     */
    orderBy?: ActionRequestOrderByWithRelationInput | ActionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionRequests.
     */
    cursor?: ActionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionRequests.
     */
    distinct?: ActionRequestScalarFieldEnum | ActionRequestScalarFieldEnum[]
  }

  /**
   * ActionRequest create
   */
  export type ActionRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionRequest.
     */
    data: XOR<ActionRequestCreateInput, ActionRequestUncheckedCreateInput>
  }

  /**
   * ActionRequest createMany
   */
  export type ActionRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionRequests.
     */
    data: ActionRequestCreateManyInput | ActionRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionRequest createManyAndReturn
   */
  export type ActionRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ActionRequests.
     */
    data: ActionRequestCreateManyInput | ActionRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionRequest update
   */
  export type ActionRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionRequest.
     */
    data: XOR<ActionRequestUpdateInput, ActionRequestUncheckedUpdateInput>
    /**
     * Choose, which ActionRequest to update.
     */
    where: ActionRequestWhereUniqueInput
  }

  /**
   * ActionRequest updateMany
   */
  export type ActionRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionRequests.
     */
    data: XOR<ActionRequestUpdateManyMutationInput, ActionRequestUncheckedUpdateManyInput>
    /**
     * Filter which ActionRequests to update
     */
    where?: ActionRequestWhereInput
    /**
     * Limit how many ActionRequests to update.
     */
    limit?: number
  }

  /**
   * ActionRequest updateManyAndReturn
   */
  export type ActionRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * The data used to update ActionRequests.
     */
    data: XOR<ActionRequestUpdateManyMutationInput, ActionRequestUncheckedUpdateManyInput>
    /**
     * Filter which ActionRequests to update
     */
    where?: ActionRequestWhereInput
    /**
     * Limit how many ActionRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionRequest upsert
   */
  export type ActionRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionRequest to update in case it exists.
     */
    where: ActionRequestWhereUniqueInput
    /**
     * In case the ActionRequest found by the `where` argument doesn't exist, create a new ActionRequest with this data.
     */
    create: XOR<ActionRequestCreateInput, ActionRequestUncheckedCreateInput>
    /**
     * In case the ActionRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionRequestUpdateInput, ActionRequestUncheckedUpdateInput>
  }

  /**
   * ActionRequest delete
   */
  export type ActionRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    /**
     * Filter which ActionRequest to delete.
     */
    where: ActionRequestWhereUniqueInput
  }

  /**
   * ActionRequest deleteMany
   */
  export type ActionRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionRequests to delete
     */
    where?: ActionRequestWhereInput
    /**
     * Limit how many ActionRequests to delete.
     */
    limit?: number
  }

  /**
   * ActionRequest.policy
   */
  export type ActionRequest$policyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
  }

  /**
   * ActionRequest.approval
   */
  export type ActionRequest$approvalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
  }

  /**
   * ActionRequest.execution
   */
  export type ActionRequest$executionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    where?: ExecutionWhereInput
  }

  /**
   * ActionRequest.auditEvents
   */
  export type ActionRequest$auditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    cursor?: AuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * ActionRequest without action
   */
  export type ActionRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
  }


  /**
   * Model Approval
   */

  export type AggregateApproval = {
    _count: ApprovalCountAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  export type ApprovalMinAggregateOutputType = {
    id: string | null
    actionRequestId: string | null
    orgId: string | null
    requestedBy: string | null
    assignedTo: string | null
    status: string | null
    decidedAt: Date | null
    reason: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ApprovalMaxAggregateOutputType = {
    id: string | null
    actionRequestId: string | null
    orgId: string | null
    requestedBy: string | null
    assignedTo: string | null
    status: string | null
    decidedAt: Date | null
    reason: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ApprovalCountAggregateOutputType = {
    id: number
    actionRequestId: number
    orgId: number
    requestedBy: number
    assignedTo: number
    status: number
    decidedAt: number
    reason: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type ApprovalMinAggregateInputType = {
    id?: true
    actionRequestId?: true
    orgId?: true
    requestedBy?: true
    assignedTo?: true
    status?: true
    decidedAt?: true
    reason?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ApprovalMaxAggregateInputType = {
    id?: true
    actionRequestId?: true
    orgId?: true
    requestedBy?: true
    assignedTo?: true
    status?: true
    decidedAt?: true
    reason?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ApprovalCountAggregateInputType = {
    id?: true
    actionRequestId?: true
    orgId?: true
    requestedBy?: true
    assignedTo?: true
    status?: true
    decidedAt?: true
    reason?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type ApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approval to aggregate.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Approvals
    **/
    _count?: true | ApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalMaxAggregateInputType
  }

  export type GetApprovalAggregateType<T extends ApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproval[P]>
      : GetScalarType<T[P], AggregateApproval[P]>
  }




  export type ApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithAggregationInput | ApprovalOrderByWithAggregationInput[]
    by: ApprovalScalarFieldEnum[] | ApprovalScalarFieldEnum
    having?: ApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalCountAggregateInputType | true
    _min?: ApprovalMinAggregateInputType
    _max?: ApprovalMaxAggregateInputType
  }

  export type ApprovalGroupByOutputType = {
    id: string
    actionRequestId: string
    orgId: string
    requestedBy: string
    assignedTo: string | null
    status: string
    decidedAt: Date | null
    reason: string | null
    expiresAt: Date | null
    createdAt: Date
    _count: ApprovalCountAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  type GetApprovalGroupByPayload<T extends ApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionRequestId?: boolean
    orgId?: boolean
    requestedBy?: boolean
    assignedTo?: boolean
    status?: boolean
    decidedAt?: boolean
    reason?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionRequestId?: boolean
    orgId?: boolean
    requestedBy?: boolean
    assignedTo?: boolean
    status?: boolean
    decidedAt?: boolean
    reason?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionRequestId?: boolean
    orgId?: boolean
    requestedBy?: boolean
    assignedTo?: boolean
    status?: boolean
    decidedAt?: boolean
    reason?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectScalar = {
    id?: boolean
    actionRequestId?: boolean
    orgId?: boolean
    requestedBy?: boolean
    assignedTo?: boolean
    status?: boolean
    decidedAt?: boolean
    reason?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type ApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionRequestId" | "orgId" | "requestedBy" | "assignedTo" | "status" | "decidedAt" | "reason" | "expiresAt" | "createdAt", ExtArgs["result"]["approval"]>
  export type ApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }

  export type $ApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Approval"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      actionRequest: Prisma.$ActionRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionRequestId: string
      orgId: string
      requestedBy: string
      assignedTo: string | null
      status: string
      decidedAt: Date | null
      reason: string | null
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["approval"]>
    composites: {}
  }

  type ApprovalGetPayload<S extends boolean | null | undefined | ApprovalDefaultArgs> = $Result.GetResult<Prisma.$ApprovalPayload, S>

  type ApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalCountAggregateInputType | true
    }

  export interface ApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Approval'], meta: { name: 'Approval' } }
    /**
     * Find zero or one Approval that matches the filter.
     * @param {ApprovalFindUniqueArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalFindUniqueArgs>(args: SelectSubset<T, ApprovalFindUniqueArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Approval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalFindUniqueOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalFindFirstArgs>(args?: SelectSubset<T, ApprovalFindFirstArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Approval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Approvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Approvals
     * const approvals = await prisma.approval.findMany()
     * 
     * // Get first 10 Approvals
     * const approvals = await prisma.approval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalWithIdOnly = await prisma.approval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalFindManyArgs>(args?: SelectSubset<T, ApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Approval.
     * @param {ApprovalCreateArgs} args - Arguments to create a Approval.
     * @example
     * // Create one Approval
     * const Approval = await prisma.approval.create({
     *   data: {
     *     // ... data to create a Approval
     *   }
     * })
     * 
     */
    create<T extends ApprovalCreateArgs>(args: SelectSubset<T, ApprovalCreateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Approvals.
     * @param {ApprovalCreateManyArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalCreateManyArgs>(args?: SelectSubset<T, ApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Approvals and returns the data saved in the database.
     * @param {ApprovalCreateManyAndReturnArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Approval.
     * @param {ApprovalDeleteArgs} args - Arguments to delete one Approval.
     * @example
     * // Delete one Approval
     * const Approval = await prisma.approval.delete({
     *   where: {
     *     // ... filter to delete one Approval
     *   }
     * })
     * 
     */
    delete<T extends ApprovalDeleteArgs>(args: SelectSubset<T, ApprovalDeleteArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Approval.
     * @param {ApprovalUpdateArgs} args - Arguments to update one Approval.
     * @example
     * // Update one Approval
     * const approval = await prisma.approval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalUpdateArgs>(args: SelectSubset<T, ApprovalUpdateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Approvals.
     * @param {ApprovalDeleteManyArgs} args - Arguments to filter Approvals to delete.
     * @example
     * // Delete a few Approvals
     * const { count } = await prisma.approval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalDeleteManyArgs>(args?: SelectSubset<T, ApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalUpdateManyArgs>(args: SelectSubset<T, ApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals and returns the data updated in the database.
     * @param {ApprovalUpdateManyAndReturnArgs} args - Arguments to update many Approvals.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Approval.
     * @param {ApprovalUpsertArgs} args - Arguments to update or create a Approval.
     * @example
     * // Update or create a Approval
     * const approval = await prisma.approval.upsert({
     *   create: {
     *     // ... data to create a Approval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Approval we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalUpsertArgs>(args: SelectSubset<T, ApprovalUpsertArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalCountArgs} args - Arguments to filter Approvals to count.
     * @example
     * // Count the number of Approvals
     * const count = await prisma.approval.count({
     *   where: {
     *     // ... the filter for the Approvals we want to count
     *   }
     * })
    **/
    count<T extends ApprovalCountArgs>(
      args?: Subset<T, ApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalAggregateArgs>(args: Subset<T, ApprovalAggregateArgs>): Prisma.PrismaPromise<GetApprovalAggregateType<T>>

    /**
     * Group by Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Approval model
   */
  readonly fields: ApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Approval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actionRequest<T extends ActionRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionRequestDefaultArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Approval model
   */
  interface ApprovalFieldRefs {
    readonly id: FieldRef<"Approval", 'String'>
    readonly actionRequestId: FieldRef<"Approval", 'String'>
    readonly orgId: FieldRef<"Approval", 'String'>
    readonly requestedBy: FieldRef<"Approval", 'String'>
    readonly assignedTo: FieldRef<"Approval", 'String'>
    readonly status: FieldRef<"Approval", 'String'>
    readonly decidedAt: FieldRef<"Approval", 'DateTime'>
    readonly reason: FieldRef<"Approval", 'String'>
    readonly expiresAt: FieldRef<"Approval", 'DateTime'>
    readonly createdAt: FieldRef<"Approval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Approval findUnique
   */
  export type ApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findUniqueOrThrow
   */
  export type ApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findFirst
   */
  export type ApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findFirstOrThrow
   */
  export type ApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findMany
   */
  export type ApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approvals to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval create
   */
  export type ApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a Approval.
     */
    data: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
  }

  /**
   * Approval createMany
   */
  export type ApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Approval createManyAndReturn
   */
  export type ApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval update
   */
  export type ApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a Approval.
     */
    data: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
    /**
     * Choose, which Approval to update.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval updateMany
   */
  export type ApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
  }

  /**
   * Approval updateManyAndReturn
   */
  export type ApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval upsert
   */
  export type ApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the Approval to update in case it exists.
     */
    where: ApprovalWhereUniqueInput
    /**
     * In case the Approval found by the `where` argument doesn't exist, create a new Approval with this data.
     */
    create: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
    /**
     * In case the Approval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
  }

  /**
   * Approval delete
   */
  export type ApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter which Approval to delete.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval deleteMany
   */
  export type ApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approvals to delete
     */
    where?: ApprovalWhereInput
    /**
     * Limit how many Approvals to delete.
     */
    limit?: number
  }

  /**
   * Approval without action
   */
  export type ApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Approval
     */
    omit?: ApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
  }


  /**
   * Model Execution
   */

  export type AggregateExecution = {
    _count: ExecutionCountAggregateOutputType | null
    _min: ExecutionMinAggregateOutputType | null
    _max: ExecutionMaxAggregateOutputType | null
  }

  export type ExecutionMinAggregateOutputType = {
    id: string | null
    actionRequestId: string | null
    orgId: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    error: string | null
  }

  export type ExecutionMaxAggregateOutputType = {
    id: string | null
    actionRequestId: string | null
    orgId: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    error: string | null
  }

  export type ExecutionCountAggregateOutputType = {
    id: number
    actionRequestId: number
    orgId: number
    status: number
    result: number
    startedAt: number
    completedAt: number
    error: number
    _all: number
  }


  export type ExecutionMinAggregateInputType = {
    id?: true
    actionRequestId?: true
    orgId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    error?: true
  }

  export type ExecutionMaxAggregateInputType = {
    id?: true
    actionRequestId?: true
    orgId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    error?: true
  }

  export type ExecutionCountAggregateInputType = {
    id?: true
    actionRequestId?: true
    orgId?: true
    status?: true
    result?: true
    startedAt?: true
    completedAt?: true
    error?: true
    _all?: true
  }

  export type ExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Execution to aggregate.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Executions
    **/
    _count?: true | ExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionMaxAggregateInputType
  }

  export type GetExecutionAggregateType<T extends ExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecution[P]>
      : GetScalarType<T[P], AggregateExecution[P]>
  }




  export type ExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionWhereInput
    orderBy?: ExecutionOrderByWithAggregationInput | ExecutionOrderByWithAggregationInput[]
    by: ExecutionScalarFieldEnum[] | ExecutionScalarFieldEnum
    having?: ExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionCountAggregateInputType | true
    _min?: ExecutionMinAggregateInputType
    _max?: ExecutionMaxAggregateInputType
  }

  export type ExecutionGroupByOutputType = {
    id: string
    actionRequestId: string
    orgId: string
    status: string
    result: JsonValue | null
    startedAt: Date
    completedAt: Date | null
    error: string | null
    _count: ExecutionCountAggregateOutputType | null
    _min: ExecutionMinAggregateOutputType | null
    _max: ExecutionMaxAggregateOutputType | null
  }

  type GetExecutionGroupByPayload<T extends ExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionRequestId?: boolean
    orgId?: boolean
    status?: boolean
    result?: boolean
    startedAt?: boolean
    completedAt?: boolean
    error?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["execution"]>

  export type ExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionRequestId?: boolean
    orgId?: boolean
    status?: boolean
    result?: boolean
    startedAt?: boolean
    completedAt?: boolean
    error?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["execution"]>

  export type ExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionRequestId?: boolean
    orgId?: boolean
    status?: boolean
    result?: boolean
    startedAt?: boolean
    completedAt?: boolean
    error?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["execution"]>

  export type ExecutionSelectScalar = {
    id?: boolean
    actionRequestId?: boolean
    orgId?: boolean
    status?: boolean
    result?: boolean
    startedAt?: boolean
    completedAt?: boolean
    error?: boolean
  }

  export type ExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionRequestId" | "orgId" | "status" | "result" | "startedAt" | "completedAt" | "error", ExtArgs["result"]["execution"]>
  export type ExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }
  export type ExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }
  export type ExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | ActionRequestDefaultArgs<ExtArgs>
  }

  export type $ExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Execution"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      actionRequest: Prisma.$ActionRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionRequestId: string
      orgId: string
      status: string
      result: Prisma.JsonValue | null
      startedAt: Date
      completedAt: Date | null
      error: string | null
    }, ExtArgs["result"]["execution"]>
    composites: {}
  }

  type ExecutionGetPayload<S extends boolean | null | undefined | ExecutionDefaultArgs> = $Result.GetResult<Prisma.$ExecutionPayload, S>

  type ExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionCountAggregateInputType | true
    }

  export interface ExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Execution'], meta: { name: 'Execution' } }
    /**
     * Find zero or one Execution that matches the filter.
     * @param {ExecutionFindUniqueArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionFindUniqueArgs>(args: SelectSubset<T, ExecutionFindUniqueArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Execution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionFindUniqueOrThrowArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Execution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindFirstArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionFindFirstArgs>(args?: SelectSubset<T, ExecutionFindFirstArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Execution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindFirstOrThrowArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Executions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Executions
     * const executions = await prisma.execution.findMany()
     * 
     * // Get first 10 Executions
     * const executions = await prisma.execution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionWithIdOnly = await prisma.execution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionFindManyArgs>(args?: SelectSubset<T, ExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Execution.
     * @param {ExecutionCreateArgs} args - Arguments to create a Execution.
     * @example
     * // Create one Execution
     * const Execution = await prisma.execution.create({
     *   data: {
     *     // ... data to create a Execution
     *   }
     * })
     * 
     */
    create<T extends ExecutionCreateArgs>(args: SelectSubset<T, ExecutionCreateArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Executions.
     * @param {ExecutionCreateManyArgs} args - Arguments to create many Executions.
     * @example
     * // Create many Executions
     * const execution = await prisma.execution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionCreateManyArgs>(args?: SelectSubset<T, ExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Executions and returns the data saved in the database.
     * @param {ExecutionCreateManyAndReturnArgs} args - Arguments to create many Executions.
     * @example
     * // Create many Executions
     * const execution = await prisma.execution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Executions and only return the `id`
     * const executionWithIdOnly = await prisma.execution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Execution.
     * @param {ExecutionDeleteArgs} args - Arguments to delete one Execution.
     * @example
     * // Delete one Execution
     * const Execution = await prisma.execution.delete({
     *   where: {
     *     // ... filter to delete one Execution
     *   }
     * })
     * 
     */
    delete<T extends ExecutionDeleteArgs>(args: SelectSubset<T, ExecutionDeleteArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Execution.
     * @param {ExecutionUpdateArgs} args - Arguments to update one Execution.
     * @example
     * // Update one Execution
     * const execution = await prisma.execution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionUpdateArgs>(args: SelectSubset<T, ExecutionUpdateArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Executions.
     * @param {ExecutionDeleteManyArgs} args - Arguments to filter Executions to delete.
     * @example
     * // Delete a few Executions
     * const { count } = await prisma.execution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionDeleteManyArgs>(args?: SelectSubset<T, ExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Executions
     * const execution = await prisma.execution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionUpdateManyArgs>(args: SelectSubset<T, ExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executions and returns the data updated in the database.
     * @param {ExecutionUpdateManyAndReturnArgs} args - Arguments to update many Executions.
     * @example
     * // Update many Executions
     * const execution = await prisma.execution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Executions and only return the `id`
     * const executionWithIdOnly = await prisma.execution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Execution.
     * @param {ExecutionUpsertArgs} args - Arguments to update or create a Execution.
     * @example
     * // Update or create a Execution
     * const execution = await prisma.execution.upsert({
     *   create: {
     *     // ... data to create a Execution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Execution we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionUpsertArgs>(args: SelectSubset<T, ExecutionUpsertArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCountArgs} args - Arguments to filter Executions to count.
     * @example
     * // Count the number of Executions
     * const count = await prisma.execution.count({
     *   where: {
     *     // ... the filter for the Executions we want to count
     *   }
     * })
    **/
    count<T extends ExecutionCountArgs>(
      args?: Subset<T, ExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Execution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutionAggregateArgs>(args: Subset<T, ExecutionAggregateArgs>): Prisma.PrismaPromise<GetExecutionAggregateType<T>>

    /**
     * Group by Execution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Execution model
   */
  readonly fields: ExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Execution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actionRequest<T extends ActionRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionRequestDefaultArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Execution model
   */
  interface ExecutionFieldRefs {
    readonly id: FieldRef<"Execution", 'String'>
    readonly actionRequestId: FieldRef<"Execution", 'String'>
    readonly orgId: FieldRef<"Execution", 'String'>
    readonly status: FieldRef<"Execution", 'String'>
    readonly result: FieldRef<"Execution", 'Json'>
    readonly startedAt: FieldRef<"Execution", 'DateTime'>
    readonly completedAt: FieldRef<"Execution", 'DateTime'>
    readonly error: FieldRef<"Execution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Execution findUnique
   */
  export type ExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where: ExecutionWhereUniqueInput
  }

  /**
   * Execution findUniqueOrThrow
   */
  export type ExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where: ExecutionWhereUniqueInput
  }

  /**
   * Execution findFirst
   */
  export type ExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executions.
     */
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }

  /**
   * Execution findFirstOrThrow
   */
  export type ExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executions.
     */
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }

  /**
   * Execution findMany
   */
  export type ExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Executions to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executions.
     */
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }

  /**
   * Execution create
   */
  export type ExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Execution.
     */
    data: XOR<ExecutionCreateInput, ExecutionUncheckedCreateInput>
  }

  /**
   * Execution createMany
   */
  export type ExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Executions.
     */
    data: ExecutionCreateManyInput | ExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Execution createManyAndReturn
   */
  export type ExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many Executions.
     */
    data: ExecutionCreateManyInput | ExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Execution update
   */
  export type ExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Execution.
     */
    data: XOR<ExecutionUpdateInput, ExecutionUncheckedUpdateInput>
    /**
     * Choose, which Execution to update.
     */
    where: ExecutionWhereUniqueInput
  }

  /**
   * Execution updateMany
   */
  export type ExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Executions.
     */
    data: XOR<ExecutionUpdateManyMutationInput, ExecutionUncheckedUpdateManyInput>
    /**
     * Filter which Executions to update
     */
    where?: ExecutionWhereInput
    /**
     * Limit how many Executions to update.
     */
    limit?: number
  }

  /**
   * Execution updateManyAndReturn
   */
  export type ExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * The data used to update Executions.
     */
    data: XOR<ExecutionUpdateManyMutationInput, ExecutionUncheckedUpdateManyInput>
    /**
     * Filter which Executions to update
     */
    where?: ExecutionWhereInput
    /**
     * Limit how many Executions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Execution upsert
   */
  export type ExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Execution to update in case it exists.
     */
    where: ExecutionWhereUniqueInput
    /**
     * In case the Execution found by the `where` argument doesn't exist, create a new Execution with this data.
     */
    create: XOR<ExecutionCreateInput, ExecutionUncheckedCreateInput>
    /**
     * In case the Execution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionUpdateInput, ExecutionUncheckedUpdateInput>
  }

  /**
   * Execution delete
   */
  export type ExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter which Execution to delete.
     */
    where: ExecutionWhereUniqueInput
  }

  /**
   * Execution deleteMany
   */
  export type ExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executions to delete
     */
    where?: ExecutionWhereInput
    /**
     * Limit how many Executions to delete.
     */
    limit?: number
  }

  /**
   * Execution without action
   */
  export type ExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
  }


  /**
   * Model AuditEvent
   */

  export type AggregateAuditEvent = {
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  export type AuditEventMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    entityType: string | null
    entityId: string | null
    eventType: string | null
    actorId: string | null
    actorType: string | null
    traceId: string | null
    actionRequestId: string | null
    createdAt: Date | null
  }

  export type AuditEventMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    entityType: string | null
    entityId: string | null
    eventType: string | null
    actorId: string | null
    actorType: string | null
    traceId: string | null
    actionRequestId: string | null
    createdAt: Date | null
  }

  export type AuditEventCountAggregateOutputType = {
    id: number
    orgId: number
    entityType: number
    entityId: number
    eventType: number
    actorId: number
    actorType: number
    payload: number
    traceId: number
    actionRequestId: number
    createdAt: number
    _all: number
  }


  export type AuditEventMinAggregateInputType = {
    id?: true
    orgId?: true
    entityType?: true
    entityId?: true
    eventType?: true
    actorId?: true
    actorType?: true
    traceId?: true
    actionRequestId?: true
    createdAt?: true
  }

  export type AuditEventMaxAggregateInputType = {
    id?: true
    orgId?: true
    entityType?: true
    entityId?: true
    eventType?: true
    actorId?: true
    actorType?: true
    traceId?: true
    actionRequestId?: true
    createdAt?: true
  }

  export type AuditEventCountAggregateInputType = {
    id?: true
    orgId?: true
    entityType?: true
    entityId?: true
    eventType?: true
    actorId?: true
    actorType?: true
    payload?: true
    traceId?: true
    actionRequestId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvent to aggregate.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditEvents
    **/
    _count?: true | AuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditEventMaxAggregateInputType
  }

  export type GetAuditEventAggregateType<T extends AuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditEvent[P]>
      : GetScalarType<T[P], AggregateAuditEvent[P]>
  }




  export type AuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithAggregationInput | AuditEventOrderByWithAggregationInput[]
    by: AuditEventScalarFieldEnum[] | AuditEventScalarFieldEnum
    having?: AuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditEventCountAggregateInputType | true
    _min?: AuditEventMinAggregateInputType
    _max?: AuditEventMaxAggregateInputType
  }

  export type AuditEventGroupByOutputType = {
    id: string
    orgId: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload: JsonValue | null
    traceId: string
    actionRequestId: string | null
    createdAt: Date
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  type GetAuditEventGroupByPayload<T extends AuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
        }
      >
    >


  export type AuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    entityType?: boolean
    entityId?: boolean
    eventType?: boolean
    actorId?: boolean
    actorType?: boolean
    payload?: boolean
    traceId?: boolean
    actionRequestId?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | AuditEvent$actionRequestArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    entityType?: boolean
    entityId?: boolean
    eventType?: boolean
    actorId?: boolean
    actorType?: boolean
    payload?: boolean
    traceId?: boolean
    actionRequestId?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | AuditEvent$actionRequestArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    entityType?: boolean
    entityId?: boolean
    eventType?: boolean
    actorId?: boolean
    actorType?: boolean
    payload?: boolean
    traceId?: boolean
    actionRequestId?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | AuditEvent$actionRequestArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectScalar = {
    id?: boolean
    orgId?: boolean
    entityType?: boolean
    entityId?: boolean
    eventType?: boolean
    actorId?: boolean
    actorType?: boolean
    payload?: boolean
    traceId?: boolean
    actionRequestId?: boolean
    createdAt?: boolean
  }

  export type AuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "entityType" | "entityId" | "eventType" | "actorId" | "actorType" | "payload" | "traceId" | "actionRequestId" | "createdAt", ExtArgs["result"]["auditEvent"]>
  export type AuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | AuditEvent$actionRequestArgs<ExtArgs>
  }
  export type AuditEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | AuditEvent$actionRequestArgs<ExtArgs>
  }
  export type AuditEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    actionRequest?: boolean | AuditEvent$actionRequestArgs<ExtArgs>
  }

  export type $AuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditEvent"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      actionRequest: Prisma.$ActionRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      entityType: string
      entityId: string
      eventType: string
      actorId: string
      actorType: string
      payload: Prisma.JsonValue | null
      traceId: string
      actionRequestId: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditEvent"]>
    composites: {}
  }

  type AuditEventGetPayload<S extends boolean | null | undefined | AuditEventDefaultArgs> = $Result.GetResult<Prisma.$AuditEventPayload, S>

  type AuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditEventCountAggregateInputType | true
    }

  export interface AuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditEvent'], meta: { name: 'AuditEvent' } }
    /**
     * Find zero or one AuditEvent that matches the filter.
     * @param {AuditEventFindUniqueArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditEventFindUniqueArgs>(args: SelectSubset<T, AuditEventFindUniqueArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditEventFindUniqueOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditEventFindFirstArgs>(args?: SelectSubset<T, AuditEventFindFirstArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany()
     * 
     * // Get first 10 AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditEventFindManyArgs>(args?: SelectSubset<T, AuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditEvent.
     * @param {AuditEventCreateArgs} args - Arguments to create a AuditEvent.
     * @example
     * // Create one AuditEvent
     * const AuditEvent = await prisma.auditEvent.create({
     *   data: {
     *     // ... data to create a AuditEvent
     *   }
     * })
     * 
     */
    create<T extends AuditEventCreateArgs>(args: SelectSubset<T, AuditEventCreateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditEvents.
     * @param {AuditEventCreateManyArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditEventCreateManyArgs>(args?: SelectSubset<T, AuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditEvents and returns the data saved in the database.
     * @param {AuditEventCreateManyAndReturnArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditEvent.
     * @param {AuditEventDeleteArgs} args - Arguments to delete one AuditEvent.
     * @example
     * // Delete one AuditEvent
     * const AuditEvent = await prisma.auditEvent.delete({
     *   where: {
     *     // ... filter to delete one AuditEvent
     *   }
     * })
     * 
     */
    delete<T extends AuditEventDeleteArgs>(args: SelectSubset<T, AuditEventDeleteArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditEvent.
     * @param {AuditEventUpdateArgs} args - Arguments to update one AuditEvent.
     * @example
     * // Update one AuditEvent
     * const auditEvent = await prisma.auditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditEventUpdateArgs>(args: SelectSubset<T, AuditEventUpdateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditEvents.
     * @param {AuditEventDeleteManyArgs} args - Arguments to filter AuditEvents to delete.
     * @example
     * // Delete a few AuditEvents
     * const { count } = await prisma.auditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditEventDeleteManyArgs>(args?: SelectSubset<T, AuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditEventUpdateManyArgs>(args: SelectSubset<T, AuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents and returns the data updated in the database.
     * @param {AuditEventUpdateManyAndReturnArgs} args - Arguments to update many AuditEvents.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditEvent.
     * @param {AuditEventUpsertArgs} args - Arguments to update or create a AuditEvent.
     * @example
     * // Update or create a AuditEvent
     * const auditEvent = await prisma.auditEvent.upsert({
     *   create: {
     *     // ... data to create a AuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends AuditEventUpsertArgs>(args: SelectSubset<T, AuditEventUpsertArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventCountArgs} args - Arguments to filter AuditEvents to count.
     * @example
     * // Count the number of AuditEvents
     * const count = await prisma.auditEvent.count({
     *   where: {
     *     // ... the filter for the AuditEvents we want to count
     *   }
     * })
    **/
    count<T extends AuditEventCountArgs>(
      args?: Subset<T, AuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditEventAggregateArgs>(args: Subset<T, AuditEventAggregateArgs>): Prisma.PrismaPromise<GetAuditEventAggregateType<T>>

    /**
     * Group by AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditEventGroupByArgs['orderBy'] }
        : { orderBy?: AuditEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditEvent model
   */
  readonly fields: AuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actionRequest<T extends AuditEvent$actionRequestArgs<ExtArgs> = {}>(args?: Subset<T, AuditEvent$actionRequestArgs<ExtArgs>>): Prisma__ActionRequestClient<$Result.GetResult<Prisma.$ActionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditEvent model
   */
  interface AuditEventFieldRefs {
    readonly id: FieldRef<"AuditEvent", 'String'>
    readonly orgId: FieldRef<"AuditEvent", 'String'>
    readonly entityType: FieldRef<"AuditEvent", 'String'>
    readonly entityId: FieldRef<"AuditEvent", 'String'>
    readonly eventType: FieldRef<"AuditEvent", 'String'>
    readonly actorId: FieldRef<"AuditEvent", 'String'>
    readonly actorType: FieldRef<"AuditEvent", 'String'>
    readonly payload: FieldRef<"AuditEvent", 'Json'>
    readonly traceId: FieldRef<"AuditEvent", 'String'>
    readonly actionRequestId: FieldRef<"AuditEvent", 'String'>
    readonly createdAt: FieldRef<"AuditEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditEvent findUnique
   */
  export type AuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findUniqueOrThrow
   */
  export type AuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findFirst
   */
  export type AuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findFirstOrThrow
   */
  export type AuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findMany
   */
  export type AuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvents to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent create
   */
  export type AuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditEvent.
     */
    data: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
  }

  /**
   * AuditEvent createMany
   */
  export type AuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditEvent createManyAndReturn
   */
  export type AuditEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditEvent update
   */
  export type AuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditEvent.
     */
    data: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
    /**
     * Choose, which AuditEvent to update.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent updateMany
   */
  export type AuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
  }

  /**
   * AuditEvent updateManyAndReturn
   */
  export type AuditEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditEvent upsert
   */
  export type AuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditEvent to update in case it exists.
     */
    where: AuditEventWhereUniqueInput
    /**
     * In case the AuditEvent found by the `where` argument doesn't exist, create a new AuditEvent with this data.
     */
    create: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
    /**
     * In case the AuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
  }

  /**
   * AuditEvent delete
   */
  export type AuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter which AuditEvent to delete.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent deleteMany
   */
  export type AuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvents to delete
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to delete.
     */
    limit?: number
  }

  /**
   * AuditEvent.actionRequest
   */
  export type AuditEvent$actionRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionRequest
     */
    select?: ActionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionRequest
     */
    omit?: ActionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionRequestInclude<ExtArgs> | null
    where?: ActionRequestWhereInput
  }

  /**
   * AuditEvent without action
   */
  export type AuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
  }


  /**
   * Model UsageCounter
   */

  export type AggregateUsageCounter = {
    _count: UsageCounterCountAggregateOutputType | null
    _avg: UsageCounterAvgAggregateOutputType | null
    _sum: UsageCounterSumAggregateOutputType | null
    _min: UsageCounterMinAggregateOutputType | null
    _max: UsageCounterMaxAggregateOutputType | null
  }

  export type UsageCounterAvgAggregateOutputType = {
    actionsChecked: number | null
    actionsAllowed: number | null
    actionsApproved: number | null
    actionsDenied: number | null
  }

  export type UsageCounterSumAggregateOutputType = {
    actionsChecked: number | null
    actionsAllowed: number | null
    actionsApproved: number | null
    actionsDenied: number | null
  }

  export type UsageCounterMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    period: string | null
    actionsChecked: number | null
    actionsAllowed: number | null
    actionsApproved: number | null
    actionsDenied: number | null
    updatedAt: Date | null
  }

  export type UsageCounterMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    period: string | null
    actionsChecked: number | null
    actionsAllowed: number | null
    actionsApproved: number | null
    actionsDenied: number | null
    updatedAt: Date | null
  }

  export type UsageCounterCountAggregateOutputType = {
    id: number
    orgId: number
    period: number
    actionsChecked: number
    actionsAllowed: number
    actionsApproved: number
    actionsDenied: number
    updatedAt: number
    _all: number
  }


  export type UsageCounterAvgAggregateInputType = {
    actionsChecked?: true
    actionsAllowed?: true
    actionsApproved?: true
    actionsDenied?: true
  }

  export type UsageCounterSumAggregateInputType = {
    actionsChecked?: true
    actionsAllowed?: true
    actionsApproved?: true
    actionsDenied?: true
  }

  export type UsageCounterMinAggregateInputType = {
    id?: true
    orgId?: true
    period?: true
    actionsChecked?: true
    actionsAllowed?: true
    actionsApproved?: true
    actionsDenied?: true
    updatedAt?: true
  }

  export type UsageCounterMaxAggregateInputType = {
    id?: true
    orgId?: true
    period?: true
    actionsChecked?: true
    actionsAllowed?: true
    actionsApproved?: true
    actionsDenied?: true
    updatedAt?: true
  }

  export type UsageCounterCountAggregateInputType = {
    id?: true
    orgId?: true
    period?: true
    actionsChecked?: true
    actionsAllowed?: true
    actionsApproved?: true
    actionsDenied?: true
    updatedAt?: true
    _all?: true
  }

  export type UsageCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageCounter to aggregate.
     */
    where?: UsageCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageCounters to fetch.
     */
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageCounters
    **/
    _count?: true | UsageCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageCounterMaxAggregateInputType
  }

  export type GetUsageCounterAggregateType<T extends UsageCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageCounter[P]>
      : GetScalarType<T[P], AggregateUsageCounter[P]>
  }




  export type UsageCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageCounterWhereInput
    orderBy?: UsageCounterOrderByWithAggregationInput | UsageCounterOrderByWithAggregationInput[]
    by: UsageCounterScalarFieldEnum[] | UsageCounterScalarFieldEnum
    having?: UsageCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageCounterCountAggregateInputType | true
    _avg?: UsageCounterAvgAggregateInputType
    _sum?: UsageCounterSumAggregateInputType
    _min?: UsageCounterMinAggregateInputType
    _max?: UsageCounterMaxAggregateInputType
  }

  export type UsageCounterGroupByOutputType = {
    id: string
    orgId: string
    period: string
    actionsChecked: number
    actionsAllowed: number
    actionsApproved: number
    actionsDenied: number
    updatedAt: Date
    _count: UsageCounterCountAggregateOutputType | null
    _avg: UsageCounterAvgAggregateOutputType | null
    _sum: UsageCounterSumAggregateOutputType | null
    _min: UsageCounterMinAggregateOutputType | null
    _max: UsageCounterMaxAggregateOutputType | null
  }

  type GetUsageCounterGroupByPayload<T extends UsageCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageCounterGroupByOutputType[P]>
            : GetScalarType<T[P], UsageCounterGroupByOutputType[P]>
        }
      >
    >


  export type UsageCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    period?: boolean
    actionsChecked?: boolean
    actionsAllowed?: boolean
    actionsApproved?: boolean
    actionsDenied?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageCounter"]>

  export type UsageCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    period?: boolean
    actionsChecked?: boolean
    actionsAllowed?: boolean
    actionsApproved?: boolean
    actionsDenied?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageCounter"]>

  export type UsageCounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    period?: boolean
    actionsChecked?: boolean
    actionsAllowed?: boolean
    actionsApproved?: boolean
    actionsDenied?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageCounter"]>

  export type UsageCounterSelectScalar = {
    id?: boolean
    orgId?: boolean
    period?: boolean
    actionsChecked?: boolean
    actionsAllowed?: boolean
    actionsApproved?: boolean
    actionsDenied?: boolean
    updatedAt?: boolean
  }

  export type UsageCounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "period" | "actionsChecked" | "actionsAllowed" | "actionsApproved" | "actionsDenied" | "updatedAt", ExtArgs["result"]["usageCounter"]>
  export type UsageCounterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UsageCounterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UsageCounterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UsageCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageCounter"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      period: string
      actionsChecked: number
      actionsAllowed: number
      actionsApproved: number
      actionsDenied: number
      updatedAt: Date
    }, ExtArgs["result"]["usageCounter"]>
    composites: {}
  }

  type UsageCounterGetPayload<S extends boolean | null | undefined | UsageCounterDefaultArgs> = $Result.GetResult<Prisma.$UsageCounterPayload, S>

  type UsageCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageCounterCountAggregateInputType | true
    }

  export interface UsageCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageCounter'], meta: { name: 'UsageCounter' } }
    /**
     * Find zero or one UsageCounter that matches the filter.
     * @param {UsageCounterFindUniqueArgs} args - Arguments to find a UsageCounter
     * @example
     * // Get one UsageCounter
     * const usageCounter = await prisma.usageCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageCounterFindUniqueArgs>(args: SelectSubset<T, UsageCounterFindUniqueArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageCounterFindUniqueOrThrowArgs} args - Arguments to find a UsageCounter
     * @example
     * // Get one UsageCounter
     * const usageCounter = await prisma.usageCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterFindFirstArgs} args - Arguments to find a UsageCounter
     * @example
     * // Get one UsageCounter
     * const usageCounter = await prisma.usageCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageCounterFindFirstArgs>(args?: SelectSubset<T, UsageCounterFindFirstArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterFindFirstOrThrowArgs} args - Arguments to find a UsageCounter
     * @example
     * // Get one UsageCounter
     * const usageCounter = await prisma.usageCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageCounters
     * const usageCounters = await prisma.usageCounter.findMany()
     * 
     * // Get first 10 UsageCounters
     * const usageCounters = await prisma.usageCounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageCounterWithIdOnly = await prisma.usageCounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageCounterFindManyArgs>(args?: SelectSubset<T, UsageCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageCounter.
     * @param {UsageCounterCreateArgs} args - Arguments to create a UsageCounter.
     * @example
     * // Create one UsageCounter
     * const UsageCounter = await prisma.usageCounter.create({
     *   data: {
     *     // ... data to create a UsageCounter
     *   }
     * })
     * 
     */
    create<T extends UsageCounterCreateArgs>(args: SelectSubset<T, UsageCounterCreateArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageCounters.
     * @param {UsageCounterCreateManyArgs} args - Arguments to create many UsageCounters.
     * @example
     * // Create many UsageCounters
     * const usageCounter = await prisma.usageCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageCounterCreateManyArgs>(args?: SelectSubset<T, UsageCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageCounters and returns the data saved in the database.
     * @param {UsageCounterCreateManyAndReturnArgs} args - Arguments to create many UsageCounters.
     * @example
     * // Create many UsageCounters
     * const usageCounter = await prisma.usageCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageCounters and only return the `id`
     * const usageCounterWithIdOnly = await prisma.usageCounter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageCounter.
     * @param {UsageCounterDeleteArgs} args - Arguments to delete one UsageCounter.
     * @example
     * // Delete one UsageCounter
     * const UsageCounter = await prisma.usageCounter.delete({
     *   where: {
     *     // ... filter to delete one UsageCounter
     *   }
     * })
     * 
     */
    delete<T extends UsageCounterDeleteArgs>(args: SelectSubset<T, UsageCounterDeleteArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageCounter.
     * @param {UsageCounterUpdateArgs} args - Arguments to update one UsageCounter.
     * @example
     * // Update one UsageCounter
     * const usageCounter = await prisma.usageCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageCounterUpdateArgs>(args: SelectSubset<T, UsageCounterUpdateArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageCounters.
     * @param {UsageCounterDeleteManyArgs} args - Arguments to filter UsageCounters to delete.
     * @example
     * // Delete a few UsageCounters
     * const { count } = await prisma.usageCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageCounterDeleteManyArgs>(args?: SelectSubset<T, UsageCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageCounters
     * const usageCounter = await prisma.usageCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageCounterUpdateManyArgs>(args: SelectSubset<T, UsageCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageCounters and returns the data updated in the database.
     * @param {UsageCounterUpdateManyAndReturnArgs} args - Arguments to update many UsageCounters.
     * @example
     * // Update many UsageCounters
     * const usageCounter = await prisma.usageCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageCounters and only return the `id`
     * const usageCounterWithIdOnly = await prisma.usageCounter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageCounterUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageCounter.
     * @param {UsageCounterUpsertArgs} args - Arguments to update or create a UsageCounter.
     * @example
     * // Update or create a UsageCounter
     * const usageCounter = await prisma.usageCounter.upsert({
     *   create: {
     *     // ... data to create a UsageCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageCounter we want to update
     *   }
     * })
     */
    upsert<T extends UsageCounterUpsertArgs>(args: SelectSubset<T, UsageCounterUpsertArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterCountArgs} args - Arguments to filter UsageCounters to count.
     * @example
     * // Count the number of UsageCounters
     * const count = await prisma.usageCounter.count({
     *   where: {
     *     // ... the filter for the UsageCounters we want to count
     *   }
     * })
    **/
    count<T extends UsageCounterCountArgs>(
      args?: Subset<T, UsageCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageCounterAggregateArgs>(args: Subset<T, UsageCounterAggregateArgs>): Prisma.PrismaPromise<GetUsageCounterAggregateType<T>>

    /**
     * Group by UsageCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageCounterGroupByArgs['orderBy'] }
        : { orderBy?: UsageCounterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageCounter model
   */
  readonly fields: UsageCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageCounter model
   */
  interface UsageCounterFieldRefs {
    readonly id: FieldRef<"UsageCounter", 'String'>
    readonly orgId: FieldRef<"UsageCounter", 'String'>
    readonly period: FieldRef<"UsageCounter", 'String'>
    readonly actionsChecked: FieldRef<"UsageCounter", 'Int'>
    readonly actionsAllowed: FieldRef<"UsageCounter", 'Int'>
    readonly actionsApproved: FieldRef<"UsageCounter", 'Int'>
    readonly actionsDenied: FieldRef<"UsageCounter", 'Int'>
    readonly updatedAt: FieldRef<"UsageCounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageCounter findUnique
   */
  export type UsageCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounter to fetch.
     */
    where: UsageCounterWhereUniqueInput
  }

  /**
   * UsageCounter findUniqueOrThrow
   */
  export type UsageCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounter to fetch.
     */
    where: UsageCounterWhereUniqueInput
  }

  /**
   * UsageCounter findFirst
   */
  export type UsageCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounter to fetch.
     */
    where?: UsageCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageCounters to fetch.
     */
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageCounters.
     */
    cursor?: UsageCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageCounters.
     */
    distinct?: UsageCounterScalarFieldEnum | UsageCounterScalarFieldEnum[]
  }

  /**
   * UsageCounter findFirstOrThrow
   */
  export type UsageCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounter to fetch.
     */
    where?: UsageCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageCounters to fetch.
     */
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageCounters.
     */
    cursor?: UsageCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageCounters.
     */
    distinct?: UsageCounterScalarFieldEnum | UsageCounterScalarFieldEnum[]
  }

  /**
   * UsageCounter findMany
   */
  export type UsageCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounters to fetch.
     */
    where?: UsageCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageCounters to fetch.
     */
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageCounters.
     */
    cursor?: UsageCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageCounters.
     */
    distinct?: UsageCounterScalarFieldEnum | UsageCounterScalarFieldEnum[]
  }

  /**
   * UsageCounter create
   */
  export type UsageCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageCounter.
     */
    data: XOR<UsageCounterCreateInput, UsageCounterUncheckedCreateInput>
  }

  /**
   * UsageCounter createMany
   */
  export type UsageCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageCounters.
     */
    data: UsageCounterCreateManyInput | UsageCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageCounter createManyAndReturn
   */
  export type UsageCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * The data used to create many UsageCounters.
     */
    data: UsageCounterCreateManyInput | UsageCounterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageCounter update
   */
  export type UsageCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageCounter.
     */
    data: XOR<UsageCounterUpdateInput, UsageCounterUncheckedUpdateInput>
    /**
     * Choose, which UsageCounter to update.
     */
    where: UsageCounterWhereUniqueInput
  }

  /**
   * UsageCounter updateMany
   */
  export type UsageCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageCounters.
     */
    data: XOR<UsageCounterUpdateManyMutationInput, UsageCounterUncheckedUpdateManyInput>
    /**
     * Filter which UsageCounters to update
     */
    where?: UsageCounterWhereInput
    /**
     * Limit how many UsageCounters to update.
     */
    limit?: number
  }

  /**
   * UsageCounter updateManyAndReturn
   */
  export type UsageCounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * The data used to update UsageCounters.
     */
    data: XOR<UsageCounterUpdateManyMutationInput, UsageCounterUncheckedUpdateManyInput>
    /**
     * Filter which UsageCounters to update
     */
    where?: UsageCounterWhereInput
    /**
     * Limit how many UsageCounters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageCounter upsert
   */
  export type UsageCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageCounter to update in case it exists.
     */
    where: UsageCounterWhereUniqueInput
    /**
     * In case the UsageCounter found by the `where` argument doesn't exist, create a new UsageCounter with this data.
     */
    create: XOR<UsageCounterCreateInput, UsageCounterUncheckedCreateInput>
    /**
     * In case the UsageCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageCounterUpdateInput, UsageCounterUncheckedUpdateInput>
  }

  /**
   * UsageCounter delete
   */
  export type UsageCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter which UsageCounter to delete.
     */
    where: UsageCounterWhereUniqueInput
  }

  /**
   * UsageCounter deleteMany
   */
  export type UsageCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageCounters to delete
     */
    where?: UsageCounterWhereInput
    /**
     * Limit how many UsageCounters to delete.
     */
    limit?: number
  }

  /**
   * UsageCounter without action
   */
  export type UsageCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    apiKey: 'apiKey',
    plan: 'plan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    clerkId: 'clerkId',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    description: 'description',
    apiKey: 'apiKey',
    status: 'status',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    rules: 'rules',
    priority: 'priority',
    enabled: 'enabled',
    createdAt: 'createdAt'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const ActionRequestScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    agentId: 'agentId',
    actionType: 'actionType',
    payload: 'payload',
    riskScore: 'riskScore',
    decision: 'decision',
    policyId: 'policyId',
    traceId: 'traceId',
    createdAt: 'createdAt'
  };

  export type ActionRequestScalarFieldEnum = (typeof ActionRequestScalarFieldEnum)[keyof typeof ActionRequestScalarFieldEnum]


  export const ApprovalScalarFieldEnum: {
    id: 'id',
    actionRequestId: 'actionRequestId',
    orgId: 'orgId',
    requestedBy: 'requestedBy',
    assignedTo: 'assignedTo',
    status: 'status',
    decidedAt: 'decidedAt',
    reason: 'reason',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type ApprovalScalarFieldEnum = (typeof ApprovalScalarFieldEnum)[keyof typeof ApprovalScalarFieldEnum]


  export const ExecutionScalarFieldEnum: {
    id: 'id',
    actionRequestId: 'actionRequestId',
    orgId: 'orgId',
    status: 'status',
    result: 'result',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    error: 'error'
  };

  export type ExecutionScalarFieldEnum = (typeof ExecutionScalarFieldEnum)[keyof typeof ExecutionScalarFieldEnum]


  export const AuditEventScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    entityType: 'entityType',
    entityId: 'entityId',
    eventType: 'eventType',
    actorId: 'actorId',
    actorType: 'actorType',
    payload: 'payload',
    traceId: 'traceId',
    actionRequestId: 'actionRequestId',
    createdAt: 'createdAt'
  };

  export type AuditEventScalarFieldEnum = (typeof AuditEventScalarFieldEnum)[keyof typeof AuditEventScalarFieldEnum]


  export const UsageCounterScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    period: 'period',
    actionsChecked: 'actionsChecked',
    actionsAllowed: 'actionsAllowed',
    actionsApproved: 'actionsApproved',
    actionsDenied: 'actionsDenied',
    updatedAt: 'updatedAt'
  };

  export type UsageCounterScalarFieldEnum = (typeof UsageCounterScalarFieldEnum)[keyof typeof UsageCounterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    apiKey?: StringFilter<"Organization"> | string
    plan?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    agents?: AgentListRelationFilter
    policies?: PolicyListRelationFilter
    actionRequests?: ActionRequestListRelationFilter
    approvals?: ApprovalListRelationFilter
    executions?: ExecutionListRelationFilter
    auditEvents?: AuditEventListRelationFilter
    usageCounters?: UsageCounterListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    apiKey?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    agents?: AgentOrderByRelationAggregateInput
    policies?: PolicyOrderByRelationAggregateInput
    actionRequests?: ActionRequestOrderByRelationAggregateInput
    approvals?: ApprovalOrderByRelationAggregateInput
    executions?: ExecutionOrderByRelationAggregateInput
    auditEvents?: AuditEventOrderByRelationAggregateInput
    usageCounters?: UsageCounterOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    apiKey?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    plan?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    agents?: AgentListRelationFilter
    policies?: PolicyListRelationFilter
    actionRequests?: ActionRequestListRelationFilter
    approvals?: ApprovalListRelationFilter
    executions?: ExecutionListRelationFilter
    auditEvents?: AuditEventListRelationFilter
    usageCounters?: UsageCounterListRelationFilter
  }, "id" | "slug" | "apiKey">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    apiKey?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    apiKey?: StringWithAggregatesFilter<"Organization"> | string
    plan?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    orgId?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    orgId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    orgId?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    orgId?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    apiKey?: StringFilter<"Agent"> | string
    status?: StringFilter<"Agent"> | string
    metadata?: JsonNullableFilter<"Agent">
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequests?: ActionRequestListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    actionRequests?: ActionRequestOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiKey?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    orgId?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    status?: StringFilter<"Agent"> | string
    metadata?: JsonNullableFilter<"Agent">
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequests?: ActionRequestListRelationFilter
  }, "id" | "apiKey">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    orgId?: StringWithAggregatesFilter<"Agent"> | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    description?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    apiKey?: StringWithAggregatesFilter<"Agent"> | string
    status?: StringWithAggregatesFilter<"Agent"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Agent">
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: StringFilter<"Policy"> | string
    orgId?: StringFilter<"Policy"> | string
    name?: StringFilter<"Policy"> | string
    rules?: JsonFilter<"Policy">
    priority?: IntFilter<"Policy"> | number
    enabled?: BoolFilter<"Policy"> | boolean
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequests?: ActionRequestListRelationFilter
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    priority?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    actionRequests?: ActionRequestOrderByRelationAggregateInput
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    orgId?: StringFilter<"Policy"> | string
    name?: StringFilter<"Policy"> | string
    rules?: JsonFilter<"Policy">
    priority?: IntFilter<"Policy"> | number
    enabled?: BoolFilter<"Policy"> | boolean
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequests?: ActionRequestListRelationFilter
  }, "id">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    priority?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Policy"> | string
    orgId?: StringWithAggregatesFilter<"Policy"> | string
    name?: StringWithAggregatesFilter<"Policy"> | string
    rules?: JsonWithAggregatesFilter<"Policy">
    priority?: IntWithAggregatesFilter<"Policy"> | number
    enabled?: BoolWithAggregatesFilter<"Policy"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
  }

  export type ActionRequestWhereInput = {
    AND?: ActionRequestWhereInput | ActionRequestWhereInput[]
    OR?: ActionRequestWhereInput[]
    NOT?: ActionRequestWhereInput | ActionRequestWhereInput[]
    id?: StringFilter<"ActionRequest"> | string
    orgId?: StringFilter<"ActionRequest"> | string
    agentId?: StringFilter<"ActionRequest"> | string
    actionType?: StringFilter<"ActionRequest"> | string
    payload?: JsonFilter<"ActionRequest">
    riskScore?: FloatFilter<"ActionRequest"> | number
    decision?: StringFilter<"ActionRequest"> | string
    policyId?: StringNullableFilter<"ActionRequest"> | string | null
    traceId?: StringFilter<"ActionRequest"> | string
    createdAt?: DateTimeFilter<"ActionRequest"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    policy?: XOR<PolicyNullableScalarRelationFilter, PolicyWhereInput> | null
    approval?: XOR<ApprovalNullableScalarRelationFilter, ApprovalWhereInput> | null
    execution?: XOR<ExecutionNullableScalarRelationFilter, ExecutionWhereInput> | null
    auditEvents?: AuditEventListRelationFilter
  }

  export type ActionRequestOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    agentId?: SortOrder
    actionType?: SortOrder
    payload?: SortOrder
    riskScore?: SortOrder
    decision?: SortOrder
    policyId?: SortOrderInput | SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    agent?: AgentOrderByWithRelationInput
    policy?: PolicyOrderByWithRelationInput
    approval?: ApprovalOrderByWithRelationInput
    execution?: ExecutionOrderByWithRelationInput
    auditEvents?: AuditEventOrderByRelationAggregateInput
  }

  export type ActionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionRequestWhereInput | ActionRequestWhereInput[]
    OR?: ActionRequestWhereInput[]
    NOT?: ActionRequestWhereInput | ActionRequestWhereInput[]
    orgId?: StringFilter<"ActionRequest"> | string
    agentId?: StringFilter<"ActionRequest"> | string
    actionType?: StringFilter<"ActionRequest"> | string
    payload?: JsonFilter<"ActionRequest">
    riskScore?: FloatFilter<"ActionRequest"> | number
    decision?: StringFilter<"ActionRequest"> | string
    policyId?: StringNullableFilter<"ActionRequest"> | string | null
    traceId?: StringFilter<"ActionRequest"> | string
    createdAt?: DateTimeFilter<"ActionRequest"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    policy?: XOR<PolicyNullableScalarRelationFilter, PolicyWhereInput> | null
    approval?: XOR<ApprovalNullableScalarRelationFilter, ApprovalWhereInput> | null
    execution?: XOR<ExecutionNullableScalarRelationFilter, ExecutionWhereInput> | null
    auditEvents?: AuditEventListRelationFilter
  }, "id">

  export type ActionRequestOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    agentId?: SortOrder
    actionType?: SortOrder
    payload?: SortOrder
    riskScore?: SortOrder
    decision?: SortOrder
    policyId?: SortOrderInput | SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
    _count?: ActionRequestCountOrderByAggregateInput
    _avg?: ActionRequestAvgOrderByAggregateInput
    _max?: ActionRequestMaxOrderByAggregateInput
    _min?: ActionRequestMinOrderByAggregateInput
    _sum?: ActionRequestSumOrderByAggregateInput
  }

  export type ActionRequestScalarWhereWithAggregatesInput = {
    AND?: ActionRequestScalarWhereWithAggregatesInput | ActionRequestScalarWhereWithAggregatesInput[]
    OR?: ActionRequestScalarWhereWithAggregatesInput[]
    NOT?: ActionRequestScalarWhereWithAggregatesInput | ActionRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionRequest"> | string
    orgId?: StringWithAggregatesFilter<"ActionRequest"> | string
    agentId?: StringWithAggregatesFilter<"ActionRequest"> | string
    actionType?: StringWithAggregatesFilter<"ActionRequest"> | string
    payload?: JsonWithAggregatesFilter<"ActionRequest">
    riskScore?: FloatWithAggregatesFilter<"ActionRequest"> | number
    decision?: StringWithAggregatesFilter<"ActionRequest"> | string
    policyId?: StringNullableWithAggregatesFilter<"ActionRequest"> | string | null
    traceId?: StringWithAggregatesFilter<"ActionRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActionRequest"> | Date | string
  }

  export type ApprovalWhereInput = {
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    id?: StringFilter<"Approval"> | string
    actionRequestId?: StringFilter<"Approval"> | string
    orgId?: StringFilter<"Approval"> | string
    requestedBy?: StringFilter<"Approval"> | string
    assignedTo?: StringNullableFilter<"Approval"> | string | null
    status?: StringFilter<"Approval"> | string
    decidedAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    reason?: StringNullableFilter<"Approval"> | string | null
    expiresAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequest?: XOR<ActionRequestScalarRelationFilter, ActionRequestWhereInput>
  }

  export type ApprovalOrderByWithRelationInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    requestedBy?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    status?: SortOrder
    decidedAt?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    actionRequest?: ActionRequestOrderByWithRelationInput
  }

  export type ApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    actionRequestId?: string
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    orgId?: StringFilter<"Approval"> | string
    requestedBy?: StringFilter<"Approval"> | string
    assignedTo?: StringNullableFilter<"Approval"> | string | null
    status?: StringFilter<"Approval"> | string
    decidedAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    reason?: StringNullableFilter<"Approval"> | string | null
    expiresAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequest?: XOR<ActionRequestScalarRelationFilter, ActionRequestWhereInput>
  }, "id" | "actionRequestId">

  export type ApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    requestedBy?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    status?: SortOrder
    decidedAt?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApprovalCountOrderByAggregateInput
    _max?: ApprovalMaxOrderByAggregateInput
    _min?: ApprovalMinOrderByAggregateInput
  }

  export type ApprovalScalarWhereWithAggregatesInput = {
    AND?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    OR?: ApprovalScalarWhereWithAggregatesInput[]
    NOT?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Approval"> | string
    actionRequestId?: StringWithAggregatesFilter<"Approval"> | string
    orgId?: StringWithAggregatesFilter<"Approval"> | string
    requestedBy?: StringWithAggregatesFilter<"Approval"> | string
    assignedTo?: StringNullableWithAggregatesFilter<"Approval"> | string | null
    status?: StringWithAggregatesFilter<"Approval"> | string
    decidedAt?: DateTimeNullableWithAggregatesFilter<"Approval"> | Date | string | null
    reason?: StringNullableWithAggregatesFilter<"Approval"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Approval"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Approval"> | Date | string
  }

  export type ExecutionWhereInput = {
    AND?: ExecutionWhereInput | ExecutionWhereInput[]
    OR?: ExecutionWhereInput[]
    NOT?: ExecutionWhereInput | ExecutionWhereInput[]
    id?: StringFilter<"Execution"> | string
    actionRequestId?: StringFilter<"Execution"> | string
    orgId?: StringFilter<"Execution"> | string
    status?: StringFilter<"Execution"> | string
    result?: JsonNullableFilter<"Execution">
    startedAt?: DateTimeFilter<"Execution"> | Date | string
    completedAt?: DateTimeNullableFilter<"Execution"> | Date | string | null
    error?: StringNullableFilter<"Execution"> | string | null
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequest?: XOR<ActionRequestScalarRelationFilter, ActionRequestWhereInput>
  }

  export type ExecutionOrderByWithRelationInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    org?: OrganizationOrderByWithRelationInput
    actionRequest?: ActionRequestOrderByWithRelationInput
  }

  export type ExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    actionRequestId?: string
    AND?: ExecutionWhereInput | ExecutionWhereInput[]
    OR?: ExecutionWhereInput[]
    NOT?: ExecutionWhereInput | ExecutionWhereInput[]
    orgId?: StringFilter<"Execution"> | string
    status?: StringFilter<"Execution"> | string
    result?: JsonNullableFilter<"Execution">
    startedAt?: DateTimeFilter<"Execution"> | Date | string
    completedAt?: DateTimeNullableFilter<"Execution"> | Date | string | null
    error?: StringNullableFilter<"Execution"> | string | null
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequest?: XOR<ActionRequestScalarRelationFilter, ActionRequestWhereInput>
  }, "id" | "actionRequestId">

  export type ExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    _count?: ExecutionCountOrderByAggregateInput
    _max?: ExecutionMaxOrderByAggregateInput
    _min?: ExecutionMinOrderByAggregateInput
  }

  export type ExecutionScalarWhereWithAggregatesInput = {
    AND?: ExecutionScalarWhereWithAggregatesInput | ExecutionScalarWhereWithAggregatesInput[]
    OR?: ExecutionScalarWhereWithAggregatesInput[]
    NOT?: ExecutionScalarWhereWithAggregatesInput | ExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Execution"> | string
    actionRequestId?: StringWithAggregatesFilter<"Execution"> | string
    orgId?: StringWithAggregatesFilter<"Execution"> | string
    status?: StringWithAggregatesFilter<"Execution"> | string
    result?: JsonNullableWithAggregatesFilter<"Execution">
    startedAt?: DateTimeWithAggregatesFilter<"Execution"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Execution"> | Date | string | null
    error?: StringNullableWithAggregatesFilter<"Execution"> | string | null
  }

  export type AuditEventWhereInput = {
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    orgId?: StringFilter<"AuditEvent"> | string
    entityType?: StringFilter<"AuditEvent"> | string
    entityId?: StringFilter<"AuditEvent"> | string
    eventType?: StringFilter<"AuditEvent"> | string
    actorId?: StringFilter<"AuditEvent"> | string
    actorType?: StringFilter<"AuditEvent"> | string
    payload?: JsonNullableFilter<"AuditEvent">
    traceId?: StringFilter<"AuditEvent"> | string
    actionRequestId?: StringNullableFilter<"AuditEvent"> | string | null
    createdAt?: DateTimeFilter<"AuditEvent"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequest?: XOR<ActionRequestNullableScalarRelationFilter, ActionRequestWhereInput> | null
  }

  export type AuditEventOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    eventType?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    payload?: SortOrderInput | SortOrder
    traceId?: SortOrder
    actionRequestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    actionRequest?: ActionRequestOrderByWithRelationInput
  }

  export type AuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    orgId?: StringFilter<"AuditEvent"> | string
    entityType?: StringFilter<"AuditEvent"> | string
    entityId?: StringFilter<"AuditEvent"> | string
    eventType?: StringFilter<"AuditEvent"> | string
    actorId?: StringFilter<"AuditEvent"> | string
    actorType?: StringFilter<"AuditEvent"> | string
    payload?: JsonNullableFilter<"AuditEvent">
    traceId?: StringFilter<"AuditEvent"> | string
    actionRequestId?: StringNullableFilter<"AuditEvent"> | string | null
    createdAt?: DateTimeFilter<"AuditEvent"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    actionRequest?: XOR<ActionRequestNullableScalarRelationFilter, ActionRequestWhereInput> | null
  }, "id">

  export type AuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    eventType?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    payload?: SortOrderInput | SortOrder
    traceId?: SortOrder
    actionRequestId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditEventCountOrderByAggregateInput
    _max?: AuditEventMaxOrderByAggregateInput
    _min?: AuditEventMinOrderByAggregateInput
  }

  export type AuditEventScalarWhereWithAggregatesInput = {
    AND?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    OR?: AuditEventScalarWhereWithAggregatesInput[]
    NOT?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditEvent"> | string
    orgId?: StringWithAggregatesFilter<"AuditEvent"> | string
    entityType?: StringWithAggregatesFilter<"AuditEvent"> | string
    entityId?: StringWithAggregatesFilter<"AuditEvent"> | string
    eventType?: StringWithAggregatesFilter<"AuditEvent"> | string
    actorId?: StringWithAggregatesFilter<"AuditEvent"> | string
    actorType?: StringWithAggregatesFilter<"AuditEvent"> | string
    payload?: JsonNullableWithAggregatesFilter<"AuditEvent">
    traceId?: StringWithAggregatesFilter<"AuditEvent"> | string
    actionRequestId?: StringNullableWithAggregatesFilter<"AuditEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditEvent"> | Date | string
  }

  export type UsageCounterWhereInput = {
    AND?: UsageCounterWhereInput | UsageCounterWhereInput[]
    OR?: UsageCounterWhereInput[]
    NOT?: UsageCounterWhereInput | UsageCounterWhereInput[]
    id?: StringFilter<"UsageCounter"> | string
    orgId?: StringFilter<"UsageCounter"> | string
    period?: StringFilter<"UsageCounter"> | string
    actionsChecked?: IntFilter<"UsageCounter"> | number
    actionsAllowed?: IntFilter<"UsageCounter"> | number
    actionsApproved?: IntFilter<"UsageCounter"> | number
    actionsDenied?: IntFilter<"UsageCounter"> | number
    updatedAt?: DateTimeFilter<"UsageCounter"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type UsageCounterOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    actionsChecked?: SortOrder
    actionsAllowed?: SortOrder
    actionsApproved?: SortOrder
    actionsDenied?: SortOrder
    updatedAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type UsageCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_period?: UsageCounterOrgIdPeriodCompoundUniqueInput
    AND?: UsageCounterWhereInput | UsageCounterWhereInput[]
    OR?: UsageCounterWhereInput[]
    NOT?: UsageCounterWhereInput | UsageCounterWhereInput[]
    orgId?: StringFilter<"UsageCounter"> | string
    period?: StringFilter<"UsageCounter"> | string
    actionsChecked?: IntFilter<"UsageCounter"> | number
    actionsAllowed?: IntFilter<"UsageCounter"> | number
    actionsApproved?: IntFilter<"UsageCounter"> | number
    actionsDenied?: IntFilter<"UsageCounter"> | number
    updatedAt?: DateTimeFilter<"UsageCounter"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "orgId_period">

  export type UsageCounterOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    actionsChecked?: SortOrder
    actionsAllowed?: SortOrder
    actionsApproved?: SortOrder
    actionsDenied?: SortOrder
    updatedAt?: SortOrder
    _count?: UsageCounterCountOrderByAggregateInput
    _avg?: UsageCounterAvgOrderByAggregateInput
    _max?: UsageCounterMaxOrderByAggregateInput
    _min?: UsageCounterMinOrderByAggregateInput
    _sum?: UsageCounterSumOrderByAggregateInput
  }

  export type UsageCounterScalarWhereWithAggregatesInput = {
    AND?: UsageCounterScalarWhereWithAggregatesInput | UsageCounterScalarWhereWithAggregatesInput[]
    OR?: UsageCounterScalarWhereWithAggregatesInput[]
    NOT?: UsageCounterScalarWhereWithAggregatesInput | UsageCounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageCounter"> | string
    orgId?: StringWithAggregatesFilter<"UsageCounter"> | string
    period?: StringWithAggregatesFilter<"UsageCounter"> | string
    actionsChecked?: IntWithAggregatesFilter<"UsageCounter"> | number
    actionsAllowed?: IntWithAggregatesFilter<"UsageCounter"> | number
    actionsApproved?: IntWithAggregatesFilter<"UsageCounter"> | number
    actionsDenied?: IntWithAggregatesFilter<"UsageCounter"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"UsageCounter"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    agents?: AgentCreateNestedManyWithoutOrgInput
    policies?: PolicyCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestCreateNestedManyWithoutOrgInput
    approvals?: ApprovalCreateNestedManyWithoutOrgInput
    executions?: ExecutionCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    agents?: AgentUncheckedCreateNestedManyWithoutOrgInput
    policies?: PolicyUncheckedCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutOrgInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutOrgInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    agents?: AgentUpdateManyWithoutOrgNestedInput
    policies?: PolicyUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    agents?: AgentUncheckedUpdateManyWithoutOrgNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    role?: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    orgId: string
    clerkId: string
    email: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    orgId: string
    clerkId: string
    email: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateInput = {
    id?: string
    name: string
    description?: string | null
    apiKey?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutAgentsInput
    actionRequests?: ActionRequestCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    apiKey?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutAgentsNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    apiKey?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateInput = {
    id?: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    priority?: number
    enabled?: boolean
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutPoliciesInput
    actionRequests?: ActionRequestCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    priority?: number
    enabled?: boolean
    createdAt?: Date | string
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutPoliciesNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateManyInput = {
    id?: string
    orgId: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    priority?: number
    enabled?: boolean
    createdAt?: Date | string
  }

  export type PolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionRequestCreateInput = {
    id?: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutActionRequestsInput
    agent: AgentCreateNestedOneWithoutActionRequestsInput
    policy?: PolicyCreateNestedOneWithoutActionRequestsInput
    approval?: ApprovalCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestUncheckedCreateInput = {
    id?: string
    orgId: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
    approval?: ApprovalUncheckedCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionUncheckedCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutActionRequestsNestedInput
    agent?: AgentUpdateOneRequiredWithoutActionRequestsNestedInput
    policy?: PolicyUpdateOneWithoutActionRequestsNestedInput
    approval?: ApprovalUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUncheckedUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUncheckedUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestCreateManyInput = {
    id?: string
    orgId: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
  }

  export type ActionRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalCreateInput = {
    id?: string
    requestedBy: string
    assignedTo?: string | null
    status?: string
    decidedAt?: Date | string | null
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutApprovalsInput
    actionRequest: ActionRequestCreateNestedOneWithoutApprovalInput
  }

  export type ApprovalUncheckedCreateInput = {
    id?: string
    actionRequestId: string
    orgId: string
    requestedBy: string
    assignedTo?: string | null
    status?: string
    decidedAt?: Date | string | null
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApprovalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutApprovalsNestedInput
    actionRequest?: ActionRequestUpdateOneRequiredWithoutApprovalNestedInput
  }

  export type ApprovalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionRequestId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalCreateManyInput = {
    id?: string
    actionRequestId: string
    orgId: string
    requestedBy: string
    assignedTo?: string | null
    status?: string
    decidedAt?: Date | string | null
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApprovalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionRequestId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionCreateInput = {
    id?: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    error?: string | null
    org: OrganizationCreateNestedOneWithoutExecutionsInput
    actionRequest: ActionRequestCreateNestedOneWithoutExecutionInput
  }

  export type ExecutionUncheckedCreateInput = {
    id?: string
    actionRequestId: string
    orgId: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    error?: string | null
  }

  export type ExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    org?: OrganizationUpdateOneRequiredWithoutExecutionsNestedInput
    actionRequest?: ActionRequestUpdateOneRequiredWithoutExecutionNestedInput
  }

  export type ExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionRequestId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionCreateManyInput = {
    id?: string
    actionRequestId: string
    orgId: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    error?: string | null
  }

  export type ExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionRequestId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditEventCreateInput = {
    id?: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutAuditEventsInput
    actionRequest?: ActionRequestCreateNestedOneWithoutAuditEventsInput
  }

  export type AuditEventUncheckedCreateInput = {
    id?: string
    orgId: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    actionRequestId?: string | null
    createdAt?: Date | string
  }

  export type AuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutAuditEventsNestedInput
    actionRequest?: ActionRequestUpdateOneWithoutAuditEventsNestedInput
  }

  export type AuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    actionRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateManyInput = {
    id?: string
    orgId: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    actionRequestId?: string | null
    createdAt?: Date | string
  }

  export type AuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    actionRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterCreateInput = {
    id?: string
    period: string
    actionsChecked?: number
    actionsAllowed?: number
    actionsApproved?: number
    actionsDenied?: number
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutUsageCountersInput
  }

  export type UsageCounterUncheckedCreateInput = {
    id?: string
    orgId: string
    period: string
    actionsChecked?: number
    actionsAllowed?: number
    actionsApproved?: number
    actionsDenied?: number
    updatedAt?: Date | string
  }

  export type UsageCounterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    actionsChecked?: IntFieldUpdateOperationsInput | number
    actionsAllowed?: IntFieldUpdateOperationsInput | number
    actionsApproved?: IntFieldUpdateOperationsInput | number
    actionsDenied?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutUsageCountersNestedInput
  }

  export type UsageCounterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    actionsChecked?: IntFieldUpdateOperationsInput | number
    actionsAllowed?: IntFieldUpdateOperationsInput | number
    actionsApproved?: IntFieldUpdateOperationsInput | number
    actionsDenied?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterCreateManyInput = {
    id?: string
    orgId: string
    period: string
    actionsChecked?: number
    actionsAllowed?: number
    actionsApproved?: number
    actionsDenied?: number
    updatedAt?: Date | string
  }

  export type UsageCounterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    actionsChecked?: IntFieldUpdateOperationsInput | number
    actionsAllowed?: IntFieldUpdateOperationsInput | number
    actionsApproved?: IntFieldUpdateOperationsInput | number
    actionsDenied?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    actionsChecked?: IntFieldUpdateOperationsInput | number
    actionsAllowed?: IntFieldUpdateOperationsInput | number
    actionsApproved?: IntFieldUpdateOperationsInput | number
    actionsDenied?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type PolicyListRelationFilter = {
    every?: PolicyWhereInput
    some?: PolicyWhereInput
    none?: PolicyWhereInput
  }

  export type ActionRequestListRelationFilter = {
    every?: ActionRequestWhereInput
    some?: ActionRequestWhereInput
    none?: ActionRequestWhereInput
  }

  export type ApprovalListRelationFilter = {
    every?: ApprovalWhereInput
    some?: ApprovalWhereInput
    none?: ApprovalWhereInput
  }

  export type ExecutionListRelationFilter = {
    every?: ExecutionWhereInput
    some?: ExecutionWhereInput
    none?: ExecutionWhereInput
  }

  export type AuditEventListRelationFilter = {
    every?: AuditEventWhereInput
    some?: AuditEventWhereInput
    none?: AuditEventWhereInput
  }

  export type UsageCounterListRelationFilter = {
    every?: UsageCounterWhereInput
    some?: UsageCounterWhereInput
    none?: UsageCounterWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActionRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageCounterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    apiKey?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    apiKey?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    apiKey?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    priority?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    priority?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AgentScalarRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type PolicyNullableScalarRelationFilter = {
    is?: PolicyWhereInput | null
    isNot?: PolicyWhereInput | null
  }

  export type ApprovalNullableScalarRelationFilter = {
    is?: ApprovalWhereInput | null
    isNot?: ApprovalWhereInput | null
  }

  export type ExecutionNullableScalarRelationFilter = {
    is?: ExecutionWhereInput | null
    isNot?: ExecutionWhereInput | null
  }

  export type ActionRequestCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    agentId?: SortOrder
    actionType?: SortOrder
    payload?: SortOrder
    riskScore?: SortOrder
    decision?: SortOrder
    policyId?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActionRequestAvgOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type ActionRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    agentId?: SortOrder
    actionType?: SortOrder
    riskScore?: SortOrder
    decision?: SortOrder
    policyId?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActionRequestMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    agentId?: SortOrder
    actionType?: SortOrder
    riskScore?: SortOrder
    decision?: SortOrder
    policyId?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActionRequestSumOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ActionRequestScalarRelationFilter = {
    is?: ActionRequestWhereInput
    isNot?: ActionRequestWhereInput
  }

  export type ApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    requestedBy?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    decidedAt?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    requestedBy?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    decidedAt?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    requestedBy?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    decidedAt?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    status?: SortOrder
    result?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    error?: SortOrder
  }

  export type ExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    error?: SortOrder
  }

  export type ExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    actionRequestId?: SortOrder
    orgId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    error?: SortOrder
  }

  export type ActionRequestNullableScalarRelationFilter = {
    is?: ActionRequestWhereInput | null
    isNot?: ActionRequestWhereInput | null
  }

  export type AuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    eventType?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    payload?: SortOrder
    traceId?: SortOrder
    actionRequestId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    eventType?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    traceId?: SortOrder
    actionRequestId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    eventType?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    traceId?: SortOrder
    actionRequestId?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageCounterOrgIdPeriodCompoundUniqueInput = {
    orgId: string
    period: string
  }

  export type UsageCounterCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    actionsChecked?: SortOrder
    actionsAllowed?: SortOrder
    actionsApproved?: SortOrder
    actionsDenied?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageCounterAvgOrderByAggregateInput = {
    actionsChecked?: SortOrder
    actionsAllowed?: SortOrder
    actionsApproved?: SortOrder
    actionsDenied?: SortOrder
  }

  export type UsageCounterMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    actionsChecked?: SortOrder
    actionsAllowed?: SortOrder
    actionsApproved?: SortOrder
    actionsDenied?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageCounterMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    actionsChecked?: SortOrder
    actionsAllowed?: SortOrder
    actionsApproved?: SortOrder
    actionsDenied?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageCounterSumOrderByAggregateInput = {
    actionsChecked?: SortOrder
    actionsAllowed?: SortOrder
    actionsApproved?: SortOrder
    actionsDenied?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AgentCreateNestedManyWithoutOrgInput = {
    create?: XOR<AgentCreateWithoutOrgInput, AgentUncheckedCreateWithoutOrgInput> | AgentCreateWithoutOrgInput[] | AgentUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutOrgInput | AgentCreateOrConnectWithoutOrgInput[]
    createMany?: AgentCreateManyOrgInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type PolicyCreateNestedManyWithoutOrgInput = {
    create?: XOR<PolicyCreateWithoutOrgInput, PolicyUncheckedCreateWithoutOrgInput> | PolicyCreateWithoutOrgInput[] | PolicyUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutOrgInput | PolicyCreateOrConnectWithoutOrgInput[]
    createMany?: PolicyCreateManyOrgInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type ActionRequestCreateNestedManyWithoutOrgInput = {
    create?: XOR<ActionRequestCreateWithoutOrgInput, ActionRequestUncheckedCreateWithoutOrgInput> | ActionRequestCreateWithoutOrgInput[] | ActionRequestUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutOrgInput | ActionRequestCreateOrConnectWithoutOrgInput[]
    createMany?: ActionRequestCreateManyOrgInputEnvelope
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
  }

  export type ApprovalCreateNestedManyWithoutOrgInput = {
    create?: XOR<ApprovalCreateWithoutOrgInput, ApprovalUncheckedCreateWithoutOrgInput> | ApprovalCreateWithoutOrgInput[] | ApprovalUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutOrgInput | ApprovalCreateOrConnectWithoutOrgInput[]
    createMany?: ApprovalCreateManyOrgInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type ExecutionCreateNestedManyWithoutOrgInput = {
    create?: XOR<ExecutionCreateWithoutOrgInput, ExecutionUncheckedCreateWithoutOrgInput> | ExecutionCreateWithoutOrgInput[] | ExecutionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutOrgInput | ExecutionCreateOrConnectWithoutOrgInput[]
    createMany?: ExecutionCreateManyOrgInputEnvelope
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
  }

  export type AuditEventCreateNestedManyWithoutOrgInput = {
    create?: XOR<AuditEventCreateWithoutOrgInput, AuditEventUncheckedCreateWithoutOrgInput> | AuditEventCreateWithoutOrgInput[] | AuditEventUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutOrgInput | AuditEventCreateOrConnectWithoutOrgInput[]
    createMany?: AuditEventCreateManyOrgInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type UsageCounterCreateNestedManyWithoutOrgInput = {
    create?: XOR<UsageCounterCreateWithoutOrgInput, UsageCounterUncheckedCreateWithoutOrgInput> | UsageCounterCreateWithoutOrgInput[] | UsageCounterUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UsageCounterCreateOrConnectWithoutOrgInput | UsageCounterCreateOrConnectWithoutOrgInput[]
    createMany?: UsageCounterCreateManyOrgInputEnvelope
    connect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AgentUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<AgentCreateWithoutOrgInput, AgentUncheckedCreateWithoutOrgInput> | AgentCreateWithoutOrgInput[] | AgentUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutOrgInput | AgentCreateOrConnectWithoutOrgInput[]
    createMany?: AgentCreateManyOrgInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type PolicyUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<PolicyCreateWithoutOrgInput, PolicyUncheckedCreateWithoutOrgInput> | PolicyCreateWithoutOrgInput[] | PolicyUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutOrgInput | PolicyCreateOrConnectWithoutOrgInput[]
    createMany?: PolicyCreateManyOrgInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type ActionRequestUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ActionRequestCreateWithoutOrgInput, ActionRequestUncheckedCreateWithoutOrgInput> | ActionRequestCreateWithoutOrgInput[] | ActionRequestUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutOrgInput | ActionRequestCreateOrConnectWithoutOrgInput[]
    createMany?: ActionRequestCreateManyOrgInputEnvelope
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ApprovalCreateWithoutOrgInput, ApprovalUncheckedCreateWithoutOrgInput> | ApprovalCreateWithoutOrgInput[] | ApprovalUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutOrgInput | ApprovalCreateOrConnectWithoutOrgInput[]
    createMany?: ApprovalCreateManyOrgInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type ExecutionUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ExecutionCreateWithoutOrgInput, ExecutionUncheckedCreateWithoutOrgInput> | ExecutionCreateWithoutOrgInput[] | ExecutionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutOrgInput | ExecutionCreateOrConnectWithoutOrgInput[]
    createMany?: ExecutionCreateManyOrgInputEnvelope
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
  }

  export type AuditEventUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<AuditEventCreateWithoutOrgInput, AuditEventUncheckedCreateWithoutOrgInput> | AuditEventCreateWithoutOrgInput[] | AuditEventUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutOrgInput | AuditEventCreateOrConnectWithoutOrgInput[]
    createMany?: AuditEventCreateManyOrgInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type UsageCounterUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<UsageCounterCreateWithoutOrgInput, UsageCounterUncheckedCreateWithoutOrgInput> | UsageCounterCreateWithoutOrgInput[] | UsageCounterUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UsageCounterCreateOrConnectWithoutOrgInput | UsageCounterCreateOrConnectWithoutOrgInput[]
    createMany?: UsageCounterCreateManyOrgInputEnvelope
    connect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AgentUpdateManyWithoutOrgNestedInput = {
    create?: XOR<AgentCreateWithoutOrgInput, AgentUncheckedCreateWithoutOrgInput> | AgentCreateWithoutOrgInput[] | AgentUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutOrgInput | AgentCreateOrConnectWithoutOrgInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutOrgInput | AgentUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: AgentCreateManyOrgInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutOrgInput | AgentUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutOrgInput | AgentUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type PolicyUpdateManyWithoutOrgNestedInput = {
    create?: XOR<PolicyCreateWithoutOrgInput, PolicyUncheckedCreateWithoutOrgInput> | PolicyCreateWithoutOrgInput[] | PolicyUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutOrgInput | PolicyCreateOrConnectWithoutOrgInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutOrgInput | PolicyUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: PolicyCreateManyOrgInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutOrgInput | PolicyUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutOrgInput | PolicyUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type ActionRequestUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ActionRequestCreateWithoutOrgInput, ActionRequestUncheckedCreateWithoutOrgInput> | ActionRequestCreateWithoutOrgInput[] | ActionRequestUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutOrgInput | ActionRequestCreateOrConnectWithoutOrgInput[]
    upsert?: ActionRequestUpsertWithWhereUniqueWithoutOrgInput | ActionRequestUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ActionRequestCreateManyOrgInputEnvelope
    set?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    disconnect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    delete?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    update?: ActionRequestUpdateWithWhereUniqueWithoutOrgInput | ActionRequestUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ActionRequestUpdateManyWithWhereWithoutOrgInput | ActionRequestUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ActionRequestScalarWhereInput | ActionRequestScalarWhereInput[]
  }

  export type ApprovalUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ApprovalCreateWithoutOrgInput, ApprovalUncheckedCreateWithoutOrgInput> | ApprovalCreateWithoutOrgInput[] | ApprovalUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutOrgInput | ApprovalCreateOrConnectWithoutOrgInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutOrgInput | ApprovalUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ApprovalCreateManyOrgInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutOrgInput | ApprovalUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutOrgInput | ApprovalUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type ExecutionUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ExecutionCreateWithoutOrgInput, ExecutionUncheckedCreateWithoutOrgInput> | ExecutionCreateWithoutOrgInput[] | ExecutionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutOrgInput | ExecutionCreateOrConnectWithoutOrgInput[]
    upsert?: ExecutionUpsertWithWhereUniqueWithoutOrgInput | ExecutionUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ExecutionCreateManyOrgInputEnvelope
    set?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    disconnect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    delete?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    update?: ExecutionUpdateWithWhereUniqueWithoutOrgInput | ExecutionUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ExecutionUpdateManyWithWhereWithoutOrgInput | ExecutionUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
  }

  export type AuditEventUpdateManyWithoutOrgNestedInput = {
    create?: XOR<AuditEventCreateWithoutOrgInput, AuditEventUncheckedCreateWithoutOrgInput> | AuditEventCreateWithoutOrgInput[] | AuditEventUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutOrgInput | AuditEventCreateOrConnectWithoutOrgInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutOrgInput | AuditEventUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: AuditEventCreateManyOrgInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutOrgInput | AuditEventUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutOrgInput | AuditEventUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type UsageCounterUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UsageCounterCreateWithoutOrgInput, UsageCounterUncheckedCreateWithoutOrgInput> | UsageCounterCreateWithoutOrgInput[] | UsageCounterUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UsageCounterCreateOrConnectWithoutOrgInput | UsageCounterCreateOrConnectWithoutOrgInput[]
    upsert?: UsageCounterUpsertWithWhereUniqueWithoutOrgInput | UsageCounterUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UsageCounterCreateManyOrgInputEnvelope
    set?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    disconnect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    delete?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    connect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    update?: UsageCounterUpdateWithWhereUniqueWithoutOrgInput | UsageCounterUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UsageCounterUpdateManyWithWhereWithoutOrgInput | UsageCounterUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UsageCounterScalarWhereInput | UsageCounterScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AgentUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<AgentCreateWithoutOrgInput, AgentUncheckedCreateWithoutOrgInput> | AgentCreateWithoutOrgInput[] | AgentUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutOrgInput | AgentCreateOrConnectWithoutOrgInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutOrgInput | AgentUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: AgentCreateManyOrgInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutOrgInput | AgentUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutOrgInput | AgentUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type PolicyUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<PolicyCreateWithoutOrgInput, PolicyUncheckedCreateWithoutOrgInput> | PolicyCreateWithoutOrgInput[] | PolicyUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutOrgInput | PolicyCreateOrConnectWithoutOrgInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutOrgInput | PolicyUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: PolicyCreateManyOrgInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutOrgInput | PolicyUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutOrgInput | PolicyUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type ActionRequestUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ActionRequestCreateWithoutOrgInput, ActionRequestUncheckedCreateWithoutOrgInput> | ActionRequestCreateWithoutOrgInput[] | ActionRequestUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutOrgInput | ActionRequestCreateOrConnectWithoutOrgInput[]
    upsert?: ActionRequestUpsertWithWhereUniqueWithoutOrgInput | ActionRequestUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ActionRequestCreateManyOrgInputEnvelope
    set?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    disconnect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    delete?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    update?: ActionRequestUpdateWithWhereUniqueWithoutOrgInput | ActionRequestUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ActionRequestUpdateManyWithWhereWithoutOrgInput | ActionRequestUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ActionRequestScalarWhereInput | ActionRequestScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ApprovalCreateWithoutOrgInput, ApprovalUncheckedCreateWithoutOrgInput> | ApprovalCreateWithoutOrgInput[] | ApprovalUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutOrgInput | ApprovalCreateOrConnectWithoutOrgInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutOrgInput | ApprovalUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ApprovalCreateManyOrgInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutOrgInput | ApprovalUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutOrgInput | ApprovalUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type ExecutionUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ExecutionCreateWithoutOrgInput, ExecutionUncheckedCreateWithoutOrgInput> | ExecutionCreateWithoutOrgInput[] | ExecutionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutOrgInput | ExecutionCreateOrConnectWithoutOrgInput[]
    upsert?: ExecutionUpsertWithWhereUniqueWithoutOrgInput | ExecutionUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ExecutionCreateManyOrgInputEnvelope
    set?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    disconnect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    delete?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    update?: ExecutionUpdateWithWhereUniqueWithoutOrgInput | ExecutionUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ExecutionUpdateManyWithWhereWithoutOrgInput | ExecutionUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
  }

  export type AuditEventUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<AuditEventCreateWithoutOrgInput, AuditEventUncheckedCreateWithoutOrgInput> | AuditEventCreateWithoutOrgInput[] | AuditEventUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutOrgInput | AuditEventCreateOrConnectWithoutOrgInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutOrgInput | AuditEventUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: AuditEventCreateManyOrgInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutOrgInput | AuditEventUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutOrgInput | AuditEventUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type UsageCounterUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UsageCounterCreateWithoutOrgInput, UsageCounterUncheckedCreateWithoutOrgInput> | UsageCounterCreateWithoutOrgInput[] | UsageCounterUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UsageCounterCreateOrConnectWithoutOrgInput | UsageCounterCreateOrConnectWithoutOrgInput[]
    upsert?: UsageCounterUpsertWithWhereUniqueWithoutOrgInput | UsageCounterUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UsageCounterCreateManyOrgInputEnvelope
    set?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    disconnect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    delete?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    connect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    update?: UsageCounterUpdateWithWhereUniqueWithoutOrgInput | UsageCounterUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UsageCounterUpdateManyWithWhereWithoutOrgInput | UsageCounterUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UsageCounterScalarWhereInput | UsageCounterScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationCreateNestedOneWithoutAgentsInput = {
    create?: XOR<OrganizationCreateWithoutAgentsInput, OrganizationUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAgentsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ActionRequestCreateNestedManyWithoutAgentInput = {
    create?: XOR<ActionRequestCreateWithoutAgentInput, ActionRequestUncheckedCreateWithoutAgentInput> | ActionRequestCreateWithoutAgentInput[] | ActionRequestUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutAgentInput | ActionRequestCreateOrConnectWithoutAgentInput[]
    createMany?: ActionRequestCreateManyAgentInputEnvelope
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
  }

  export type ActionRequestUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<ActionRequestCreateWithoutAgentInput, ActionRequestUncheckedCreateWithoutAgentInput> | ActionRequestCreateWithoutAgentInput[] | ActionRequestUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutAgentInput | ActionRequestCreateOrConnectWithoutAgentInput[]
    createMany?: ActionRequestCreateManyAgentInputEnvelope
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganizationUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAgentsInput, OrganizationUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAgentsInput
    upsert?: OrganizationUpsertWithoutAgentsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAgentsInput, OrganizationUpdateWithoutAgentsInput>, OrganizationUncheckedUpdateWithoutAgentsInput>
  }

  export type ActionRequestUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ActionRequestCreateWithoutAgentInput, ActionRequestUncheckedCreateWithoutAgentInput> | ActionRequestCreateWithoutAgentInput[] | ActionRequestUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutAgentInput | ActionRequestCreateOrConnectWithoutAgentInput[]
    upsert?: ActionRequestUpsertWithWhereUniqueWithoutAgentInput | ActionRequestUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ActionRequestCreateManyAgentInputEnvelope
    set?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    disconnect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    delete?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    update?: ActionRequestUpdateWithWhereUniqueWithoutAgentInput | ActionRequestUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ActionRequestUpdateManyWithWhereWithoutAgentInput | ActionRequestUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ActionRequestScalarWhereInput | ActionRequestScalarWhereInput[]
  }

  export type ActionRequestUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ActionRequestCreateWithoutAgentInput, ActionRequestUncheckedCreateWithoutAgentInput> | ActionRequestCreateWithoutAgentInput[] | ActionRequestUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutAgentInput | ActionRequestCreateOrConnectWithoutAgentInput[]
    upsert?: ActionRequestUpsertWithWhereUniqueWithoutAgentInput | ActionRequestUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ActionRequestCreateManyAgentInputEnvelope
    set?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    disconnect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    delete?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    update?: ActionRequestUpdateWithWhereUniqueWithoutAgentInput | ActionRequestUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ActionRequestUpdateManyWithWhereWithoutAgentInput | ActionRequestUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ActionRequestScalarWhereInput | ActionRequestScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<OrganizationCreateWithoutPoliciesInput, OrganizationUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPoliciesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ActionRequestCreateNestedManyWithoutPolicyInput = {
    create?: XOR<ActionRequestCreateWithoutPolicyInput, ActionRequestUncheckedCreateWithoutPolicyInput> | ActionRequestCreateWithoutPolicyInput[] | ActionRequestUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutPolicyInput | ActionRequestCreateOrConnectWithoutPolicyInput[]
    createMany?: ActionRequestCreateManyPolicyInputEnvelope
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
  }

  export type ActionRequestUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<ActionRequestCreateWithoutPolicyInput, ActionRequestUncheckedCreateWithoutPolicyInput> | ActionRequestCreateWithoutPolicyInput[] | ActionRequestUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutPolicyInput | ActionRequestCreateOrConnectWithoutPolicyInput[]
    createMany?: ActionRequestCreateManyPolicyInputEnvelope
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<OrganizationCreateWithoutPoliciesInput, OrganizationUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPoliciesInput
    upsert?: OrganizationUpsertWithoutPoliciesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPoliciesInput, OrganizationUpdateWithoutPoliciesInput>, OrganizationUncheckedUpdateWithoutPoliciesInput>
  }

  export type ActionRequestUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<ActionRequestCreateWithoutPolicyInput, ActionRequestUncheckedCreateWithoutPolicyInput> | ActionRequestCreateWithoutPolicyInput[] | ActionRequestUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutPolicyInput | ActionRequestCreateOrConnectWithoutPolicyInput[]
    upsert?: ActionRequestUpsertWithWhereUniqueWithoutPolicyInput | ActionRequestUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: ActionRequestCreateManyPolicyInputEnvelope
    set?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    disconnect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    delete?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    update?: ActionRequestUpdateWithWhereUniqueWithoutPolicyInput | ActionRequestUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: ActionRequestUpdateManyWithWhereWithoutPolicyInput | ActionRequestUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: ActionRequestScalarWhereInput | ActionRequestScalarWhereInput[]
  }

  export type ActionRequestUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<ActionRequestCreateWithoutPolicyInput, ActionRequestUncheckedCreateWithoutPolicyInput> | ActionRequestCreateWithoutPolicyInput[] | ActionRequestUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ActionRequestCreateOrConnectWithoutPolicyInput | ActionRequestCreateOrConnectWithoutPolicyInput[]
    upsert?: ActionRequestUpsertWithWhereUniqueWithoutPolicyInput | ActionRequestUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: ActionRequestCreateManyPolicyInputEnvelope
    set?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    disconnect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    delete?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    connect?: ActionRequestWhereUniqueInput | ActionRequestWhereUniqueInput[]
    update?: ActionRequestUpdateWithWhereUniqueWithoutPolicyInput | ActionRequestUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: ActionRequestUpdateManyWithWhereWithoutPolicyInput | ActionRequestUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: ActionRequestScalarWhereInput | ActionRequestScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutActionRequestsInput = {
    create?: XOR<OrganizationCreateWithoutActionRequestsInput, OrganizationUncheckedCreateWithoutActionRequestsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutActionRequestsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutActionRequestsInput = {
    create?: XOR<AgentCreateWithoutActionRequestsInput, AgentUncheckedCreateWithoutActionRequestsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutActionRequestsInput
    connect?: AgentWhereUniqueInput
  }

  export type PolicyCreateNestedOneWithoutActionRequestsInput = {
    create?: XOR<PolicyCreateWithoutActionRequestsInput, PolicyUncheckedCreateWithoutActionRequestsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutActionRequestsInput
    connect?: PolicyWhereUniqueInput
  }

  export type ApprovalCreateNestedOneWithoutActionRequestInput = {
    create?: XOR<ApprovalCreateWithoutActionRequestInput, ApprovalUncheckedCreateWithoutActionRequestInput>
    connectOrCreate?: ApprovalCreateOrConnectWithoutActionRequestInput
    connect?: ApprovalWhereUniqueInput
  }

  export type ExecutionCreateNestedOneWithoutActionRequestInput = {
    create?: XOR<ExecutionCreateWithoutActionRequestInput, ExecutionUncheckedCreateWithoutActionRequestInput>
    connectOrCreate?: ExecutionCreateOrConnectWithoutActionRequestInput
    connect?: ExecutionWhereUniqueInput
  }

  export type AuditEventCreateNestedManyWithoutActionRequestInput = {
    create?: XOR<AuditEventCreateWithoutActionRequestInput, AuditEventUncheckedCreateWithoutActionRequestInput> | AuditEventCreateWithoutActionRequestInput[] | AuditEventUncheckedCreateWithoutActionRequestInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActionRequestInput | AuditEventCreateOrConnectWithoutActionRequestInput[]
    createMany?: AuditEventCreateManyActionRequestInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedOneWithoutActionRequestInput = {
    create?: XOR<ApprovalCreateWithoutActionRequestInput, ApprovalUncheckedCreateWithoutActionRequestInput>
    connectOrCreate?: ApprovalCreateOrConnectWithoutActionRequestInput
    connect?: ApprovalWhereUniqueInput
  }

  export type ExecutionUncheckedCreateNestedOneWithoutActionRequestInput = {
    create?: XOR<ExecutionCreateWithoutActionRequestInput, ExecutionUncheckedCreateWithoutActionRequestInput>
    connectOrCreate?: ExecutionCreateOrConnectWithoutActionRequestInput
    connect?: ExecutionWhereUniqueInput
  }

  export type AuditEventUncheckedCreateNestedManyWithoutActionRequestInput = {
    create?: XOR<AuditEventCreateWithoutActionRequestInput, AuditEventUncheckedCreateWithoutActionRequestInput> | AuditEventCreateWithoutActionRequestInput[] | AuditEventUncheckedCreateWithoutActionRequestInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActionRequestInput | AuditEventCreateOrConnectWithoutActionRequestInput[]
    createMany?: AuditEventCreateManyActionRequestInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutActionRequestsNestedInput = {
    create?: XOR<OrganizationCreateWithoutActionRequestsInput, OrganizationUncheckedCreateWithoutActionRequestsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutActionRequestsInput
    upsert?: OrganizationUpsertWithoutActionRequestsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutActionRequestsInput, OrganizationUpdateWithoutActionRequestsInput>, OrganizationUncheckedUpdateWithoutActionRequestsInput>
  }

  export type AgentUpdateOneRequiredWithoutActionRequestsNestedInput = {
    create?: XOR<AgentCreateWithoutActionRequestsInput, AgentUncheckedCreateWithoutActionRequestsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutActionRequestsInput
    upsert?: AgentUpsertWithoutActionRequestsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutActionRequestsInput, AgentUpdateWithoutActionRequestsInput>, AgentUncheckedUpdateWithoutActionRequestsInput>
  }

  export type PolicyUpdateOneWithoutActionRequestsNestedInput = {
    create?: XOR<PolicyCreateWithoutActionRequestsInput, PolicyUncheckedCreateWithoutActionRequestsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutActionRequestsInput
    upsert?: PolicyUpsertWithoutActionRequestsInput
    disconnect?: PolicyWhereInput | boolean
    delete?: PolicyWhereInput | boolean
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutActionRequestsInput, PolicyUpdateWithoutActionRequestsInput>, PolicyUncheckedUpdateWithoutActionRequestsInput>
  }

  export type ApprovalUpdateOneWithoutActionRequestNestedInput = {
    create?: XOR<ApprovalCreateWithoutActionRequestInput, ApprovalUncheckedCreateWithoutActionRequestInput>
    connectOrCreate?: ApprovalCreateOrConnectWithoutActionRequestInput
    upsert?: ApprovalUpsertWithoutActionRequestInput
    disconnect?: ApprovalWhereInput | boolean
    delete?: ApprovalWhereInput | boolean
    connect?: ApprovalWhereUniqueInput
    update?: XOR<XOR<ApprovalUpdateToOneWithWhereWithoutActionRequestInput, ApprovalUpdateWithoutActionRequestInput>, ApprovalUncheckedUpdateWithoutActionRequestInput>
  }

  export type ExecutionUpdateOneWithoutActionRequestNestedInput = {
    create?: XOR<ExecutionCreateWithoutActionRequestInput, ExecutionUncheckedCreateWithoutActionRequestInput>
    connectOrCreate?: ExecutionCreateOrConnectWithoutActionRequestInput
    upsert?: ExecutionUpsertWithoutActionRequestInput
    disconnect?: ExecutionWhereInput | boolean
    delete?: ExecutionWhereInput | boolean
    connect?: ExecutionWhereUniqueInput
    update?: XOR<XOR<ExecutionUpdateToOneWithWhereWithoutActionRequestInput, ExecutionUpdateWithoutActionRequestInput>, ExecutionUncheckedUpdateWithoutActionRequestInput>
  }

  export type AuditEventUpdateManyWithoutActionRequestNestedInput = {
    create?: XOR<AuditEventCreateWithoutActionRequestInput, AuditEventUncheckedCreateWithoutActionRequestInput> | AuditEventCreateWithoutActionRequestInput[] | AuditEventUncheckedCreateWithoutActionRequestInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActionRequestInput | AuditEventCreateOrConnectWithoutActionRequestInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutActionRequestInput | AuditEventUpsertWithWhereUniqueWithoutActionRequestInput[]
    createMany?: AuditEventCreateManyActionRequestInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutActionRequestInput | AuditEventUpdateWithWhereUniqueWithoutActionRequestInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutActionRequestInput | AuditEventUpdateManyWithWhereWithoutActionRequestInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateOneWithoutActionRequestNestedInput = {
    create?: XOR<ApprovalCreateWithoutActionRequestInput, ApprovalUncheckedCreateWithoutActionRequestInput>
    connectOrCreate?: ApprovalCreateOrConnectWithoutActionRequestInput
    upsert?: ApprovalUpsertWithoutActionRequestInput
    disconnect?: ApprovalWhereInput | boolean
    delete?: ApprovalWhereInput | boolean
    connect?: ApprovalWhereUniqueInput
    update?: XOR<XOR<ApprovalUpdateToOneWithWhereWithoutActionRequestInput, ApprovalUpdateWithoutActionRequestInput>, ApprovalUncheckedUpdateWithoutActionRequestInput>
  }

  export type ExecutionUncheckedUpdateOneWithoutActionRequestNestedInput = {
    create?: XOR<ExecutionCreateWithoutActionRequestInput, ExecutionUncheckedCreateWithoutActionRequestInput>
    connectOrCreate?: ExecutionCreateOrConnectWithoutActionRequestInput
    upsert?: ExecutionUpsertWithoutActionRequestInput
    disconnect?: ExecutionWhereInput | boolean
    delete?: ExecutionWhereInput | boolean
    connect?: ExecutionWhereUniqueInput
    update?: XOR<XOR<ExecutionUpdateToOneWithWhereWithoutActionRequestInput, ExecutionUpdateWithoutActionRequestInput>, ExecutionUncheckedUpdateWithoutActionRequestInput>
  }

  export type AuditEventUncheckedUpdateManyWithoutActionRequestNestedInput = {
    create?: XOR<AuditEventCreateWithoutActionRequestInput, AuditEventUncheckedCreateWithoutActionRequestInput> | AuditEventCreateWithoutActionRequestInput[] | AuditEventUncheckedCreateWithoutActionRequestInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActionRequestInput | AuditEventCreateOrConnectWithoutActionRequestInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutActionRequestInput | AuditEventUpsertWithWhereUniqueWithoutActionRequestInput[]
    createMany?: AuditEventCreateManyActionRequestInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutActionRequestInput | AuditEventUpdateWithWhereUniqueWithoutActionRequestInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutActionRequestInput | AuditEventUpdateManyWithWhereWithoutActionRequestInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<OrganizationCreateWithoutApprovalsInput, OrganizationUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApprovalsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ActionRequestCreateNestedOneWithoutApprovalInput = {
    create?: XOR<ActionRequestCreateWithoutApprovalInput, ActionRequestUncheckedCreateWithoutApprovalInput>
    connectOrCreate?: ActionRequestCreateOrConnectWithoutApprovalInput
    connect?: ActionRequestWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<OrganizationCreateWithoutApprovalsInput, OrganizationUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApprovalsInput
    upsert?: OrganizationUpsertWithoutApprovalsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutApprovalsInput, OrganizationUpdateWithoutApprovalsInput>, OrganizationUncheckedUpdateWithoutApprovalsInput>
  }

  export type ActionRequestUpdateOneRequiredWithoutApprovalNestedInput = {
    create?: XOR<ActionRequestCreateWithoutApprovalInput, ActionRequestUncheckedCreateWithoutApprovalInput>
    connectOrCreate?: ActionRequestCreateOrConnectWithoutApprovalInput
    upsert?: ActionRequestUpsertWithoutApprovalInput
    connect?: ActionRequestWhereUniqueInput
    update?: XOR<XOR<ActionRequestUpdateToOneWithWhereWithoutApprovalInput, ActionRequestUpdateWithoutApprovalInput>, ActionRequestUncheckedUpdateWithoutApprovalInput>
  }

  export type OrganizationCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<OrganizationCreateWithoutExecutionsInput, OrganizationUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutExecutionsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ActionRequestCreateNestedOneWithoutExecutionInput = {
    create?: XOR<ActionRequestCreateWithoutExecutionInput, ActionRequestUncheckedCreateWithoutExecutionInput>
    connectOrCreate?: ActionRequestCreateOrConnectWithoutExecutionInput
    connect?: ActionRequestWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<OrganizationCreateWithoutExecutionsInput, OrganizationUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutExecutionsInput
    upsert?: OrganizationUpsertWithoutExecutionsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutExecutionsInput, OrganizationUpdateWithoutExecutionsInput>, OrganizationUncheckedUpdateWithoutExecutionsInput>
  }

  export type ActionRequestUpdateOneRequiredWithoutExecutionNestedInput = {
    create?: XOR<ActionRequestCreateWithoutExecutionInput, ActionRequestUncheckedCreateWithoutExecutionInput>
    connectOrCreate?: ActionRequestCreateOrConnectWithoutExecutionInput
    upsert?: ActionRequestUpsertWithoutExecutionInput
    connect?: ActionRequestWhereUniqueInput
    update?: XOR<XOR<ActionRequestUpdateToOneWithWhereWithoutExecutionInput, ActionRequestUpdateWithoutExecutionInput>, ActionRequestUncheckedUpdateWithoutExecutionInput>
  }

  export type OrganizationCreateNestedOneWithoutAuditEventsInput = {
    create?: XOR<OrganizationCreateWithoutAuditEventsInput, OrganizationUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditEventsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ActionRequestCreateNestedOneWithoutAuditEventsInput = {
    create?: XOR<ActionRequestCreateWithoutAuditEventsInput, ActionRequestUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: ActionRequestCreateOrConnectWithoutAuditEventsInput
    connect?: ActionRequestWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutAuditEventsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAuditEventsInput, OrganizationUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditEventsInput
    upsert?: OrganizationUpsertWithoutAuditEventsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAuditEventsInput, OrganizationUpdateWithoutAuditEventsInput>, OrganizationUncheckedUpdateWithoutAuditEventsInput>
  }

  export type ActionRequestUpdateOneWithoutAuditEventsNestedInput = {
    create?: XOR<ActionRequestCreateWithoutAuditEventsInput, ActionRequestUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: ActionRequestCreateOrConnectWithoutAuditEventsInput
    upsert?: ActionRequestUpsertWithoutAuditEventsInput
    disconnect?: ActionRequestWhereInput | boolean
    delete?: ActionRequestWhereInput | boolean
    connect?: ActionRequestWhereUniqueInput
    update?: XOR<XOR<ActionRequestUpdateToOneWithWhereWithoutAuditEventsInput, ActionRequestUpdateWithoutAuditEventsInput>, ActionRequestUncheckedUpdateWithoutAuditEventsInput>
  }

  export type OrganizationCreateNestedOneWithoutUsageCountersInput = {
    create?: XOR<OrganizationCreateWithoutUsageCountersInput, OrganizationUncheckedCreateWithoutUsageCountersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsageCountersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutUsageCountersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsageCountersInput, OrganizationUncheckedCreateWithoutUsageCountersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsageCountersInput
    upsert?: OrganizationUpsertWithoutUsageCountersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsageCountersInput, OrganizationUpdateWithoutUsageCountersInput>, OrganizationUncheckedUpdateWithoutUsageCountersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrgInput = {
    id?: string
    clerkId: string
    email: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrgInput = {
    id?: string
    clerkId: string
    email: string
    role?: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrgInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserCreateManyOrgInputEnvelope = {
    data: UserCreateManyOrgInput | UserCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type AgentCreateWithoutOrgInput = {
    id?: string
    name: string
    description?: string | null
    apiKey?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actionRequests?: ActionRequestCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutOrgInput = {
    id?: string
    name: string
    description?: string | null
    apiKey?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutOrgInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutOrgInput, AgentUncheckedCreateWithoutOrgInput>
  }

  export type AgentCreateManyOrgInputEnvelope = {
    data: AgentCreateManyOrgInput | AgentCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type PolicyCreateWithoutOrgInput = {
    id?: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    priority?: number
    enabled?: boolean
    createdAt?: Date | string
    actionRequests?: ActionRequestCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutOrgInput = {
    id?: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    priority?: number
    enabled?: boolean
    createdAt?: Date | string
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutOrgInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutOrgInput, PolicyUncheckedCreateWithoutOrgInput>
  }

  export type PolicyCreateManyOrgInputEnvelope = {
    data: PolicyCreateManyOrgInput | PolicyCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type ActionRequestCreateWithoutOrgInput = {
    id?: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutActionRequestsInput
    policy?: PolicyCreateNestedOneWithoutActionRequestsInput
    approval?: ApprovalCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestUncheckedCreateWithoutOrgInput = {
    id?: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
    approval?: ApprovalUncheckedCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionUncheckedCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestCreateOrConnectWithoutOrgInput = {
    where: ActionRequestWhereUniqueInput
    create: XOR<ActionRequestCreateWithoutOrgInput, ActionRequestUncheckedCreateWithoutOrgInput>
  }

  export type ActionRequestCreateManyOrgInputEnvelope = {
    data: ActionRequestCreateManyOrgInput | ActionRequestCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalCreateWithoutOrgInput = {
    id?: string
    requestedBy: string
    assignedTo?: string | null
    status?: string
    decidedAt?: Date | string | null
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    actionRequest: ActionRequestCreateNestedOneWithoutApprovalInput
  }

  export type ApprovalUncheckedCreateWithoutOrgInput = {
    id?: string
    actionRequestId: string
    requestedBy: string
    assignedTo?: string | null
    status?: string
    decidedAt?: Date | string | null
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApprovalCreateOrConnectWithoutOrgInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutOrgInput, ApprovalUncheckedCreateWithoutOrgInput>
  }

  export type ApprovalCreateManyOrgInputEnvelope = {
    data: ApprovalCreateManyOrgInput | ApprovalCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionCreateWithoutOrgInput = {
    id?: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    error?: string | null
    actionRequest: ActionRequestCreateNestedOneWithoutExecutionInput
  }

  export type ExecutionUncheckedCreateWithoutOrgInput = {
    id?: string
    actionRequestId: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    error?: string | null
  }

  export type ExecutionCreateOrConnectWithoutOrgInput = {
    where: ExecutionWhereUniqueInput
    create: XOR<ExecutionCreateWithoutOrgInput, ExecutionUncheckedCreateWithoutOrgInput>
  }

  export type ExecutionCreateManyOrgInputEnvelope = {
    data: ExecutionCreateManyOrgInput | ExecutionCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type AuditEventCreateWithoutOrgInput = {
    id?: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    createdAt?: Date | string
    actionRequest?: ActionRequestCreateNestedOneWithoutAuditEventsInput
  }

  export type AuditEventUncheckedCreateWithoutOrgInput = {
    id?: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    actionRequestId?: string | null
    createdAt?: Date | string
  }

  export type AuditEventCreateOrConnectWithoutOrgInput = {
    where: AuditEventWhereUniqueInput
    create: XOR<AuditEventCreateWithoutOrgInput, AuditEventUncheckedCreateWithoutOrgInput>
  }

  export type AuditEventCreateManyOrgInputEnvelope = {
    data: AuditEventCreateManyOrgInput | AuditEventCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type UsageCounterCreateWithoutOrgInput = {
    id?: string
    period: string
    actionsChecked?: number
    actionsAllowed?: number
    actionsApproved?: number
    actionsDenied?: number
    updatedAt?: Date | string
  }

  export type UsageCounterUncheckedCreateWithoutOrgInput = {
    id?: string
    period: string
    actionsChecked?: number
    actionsAllowed?: number
    actionsApproved?: number
    actionsDenied?: number
    updatedAt?: Date | string
  }

  export type UsageCounterCreateOrConnectWithoutOrgInput = {
    where: UsageCounterWhereUniqueInput
    create: XOR<UsageCounterCreateWithoutOrgInput, UsageCounterUncheckedCreateWithoutOrgInput>
  }

  export type UsageCounterCreateManyOrgInputEnvelope = {
    data: UsageCounterCreateManyOrgInput | UsageCounterCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
  }

  export type UserUpdateManyWithWhereWithoutOrgInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrgInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    orgId?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type AgentUpsertWithWhereUniqueWithoutOrgInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutOrgInput, AgentUncheckedUpdateWithoutOrgInput>
    create: XOR<AgentCreateWithoutOrgInput, AgentUncheckedCreateWithoutOrgInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutOrgInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutOrgInput, AgentUncheckedUpdateWithoutOrgInput>
  }

  export type AgentUpdateManyWithWhereWithoutOrgInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutOrgInput>
  }

  export type AgentScalarWhereInput = {
    AND?: AgentScalarWhereInput | AgentScalarWhereInput[]
    OR?: AgentScalarWhereInput[]
    NOT?: AgentScalarWhereInput | AgentScalarWhereInput[]
    id?: StringFilter<"Agent"> | string
    orgId?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    apiKey?: StringFilter<"Agent"> | string
    status?: StringFilter<"Agent"> | string
    metadata?: JsonNullableFilter<"Agent">
    createdAt?: DateTimeFilter<"Agent"> | Date | string
  }

  export type PolicyUpsertWithWhereUniqueWithoutOrgInput = {
    where: PolicyWhereUniqueInput
    update: XOR<PolicyUpdateWithoutOrgInput, PolicyUncheckedUpdateWithoutOrgInput>
    create: XOR<PolicyCreateWithoutOrgInput, PolicyUncheckedCreateWithoutOrgInput>
  }

  export type PolicyUpdateWithWhereUniqueWithoutOrgInput = {
    where: PolicyWhereUniqueInput
    data: XOR<PolicyUpdateWithoutOrgInput, PolicyUncheckedUpdateWithoutOrgInput>
  }

  export type PolicyUpdateManyWithWhereWithoutOrgInput = {
    where: PolicyScalarWhereInput
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyWithoutOrgInput>
  }

  export type PolicyScalarWhereInput = {
    AND?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    OR?: PolicyScalarWhereInput[]
    NOT?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    id?: StringFilter<"Policy"> | string
    orgId?: StringFilter<"Policy"> | string
    name?: StringFilter<"Policy"> | string
    rules?: JsonFilter<"Policy">
    priority?: IntFilter<"Policy"> | number
    enabled?: BoolFilter<"Policy"> | boolean
    createdAt?: DateTimeFilter<"Policy"> | Date | string
  }

  export type ActionRequestUpsertWithWhereUniqueWithoutOrgInput = {
    where: ActionRequestWhereUniqueInput
    update: XOR<ActionRequestUpdateWithoutOrgInput, ActionRequestUncheckedUpdateWithoutOrgInput>
    create: XOR<ActionRequestCreateWithoutOrgInput, ActionRequestUncheckedCreateWithoutOrgInput>
  }

  export type ActionRequestUpdateWithWhereUniqueWithoutOrgInput = {
    where: ActionRequestWhereUniqueInput
    data: XOR<ActionRequestUpdateWithoutOrgInput, ActionRequestUncheckedUpdateWithoutOrgInput>
  }

  export type ActionRequestUpdateManyWithWhereWithoutOrgInput = {
    where: ActionRequestScalarWhereInput
    data: XOR<ActionRequestUpdateManyMutationInput, ActionRequestUncheckedUpdateManyWithoutOrgInput>
  }

  export type ActionRequestScalarWhereInput = {
    AND?: ActionRequestScalarWhereInput | ActionRequestScalarWhereInput[]
    OR?: ActionRequestScalarWhereInput[]
    NOT?: ActionRequestScalarWhereInput | ActionRequestScalarWhereInput[]
    id?: StringFilter<"ActionRequest"> | string
    orgId?: StringFilter<"ActionRequest"> | string
    agentId?: StringFilter<"ActionRequest"> | string
    actionType?: StringFilter<"ActionRequest"> | string
    payload?: JsonFilter<"ActionRequest">
    riskScore?: FloatFilter<"ActionRequest"> | number
    decision?: StringFilter<"ActionRequest"> | string
    policyId?: StringNullableFilter<"ActionRequest"> | string | null
    traceId?: StringFilter<"ActionRequest"> | string
    createdAt?: DateTimeFilter<"ActionRequest"> | Date | string
  }

  export type ApprovalUpsertWithWhereUniqueWithoutOrgInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutOrgInput, ApprovalUncheckedUpdateWithoutOrgInput>
    create: XOR<ApprovalCreateWithoutOrgInput, ApprovalUncheckedCreateWithoutOrgInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutOrgInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutOrgInput, ApprovalUncheckedUpdateWithoutOrgInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutOrgInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutOrgInput>
  }

  export type ApprovalScalarWhereInput = {
    AND?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    OR?: ApprovalScalarWhereInput[]
    NOT?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    id?: StringFilter<"Approval"> | string
    actionRequestId?: StringFilter<"Approval"> | string
    orgId?: StringFilter<"Approval"> | string
    requestedBy?: StringFilter<"Approval"> | string
    assignedTo?: StringNullableFilter<"Approval"> | string | null
    status?: StringFilter<"Approval"> | string
    decidedAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    reason?: StringNullableFilter<"Approval"> | string | null
    expiresAt?: DateTimeNullableFilter<"Approval"> | Date | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
  }

  export type ExecutionUpsertWithWhereUniqueWithoutOrgInput = {
    where: ExecutionWhereUniqueInput
    update: XOR<ExecutionUpdateWithoutOrgInput, ExecutionUncheckedUpdateWithoutOrgInput>
    create: XOR<ExecutionCreateWithoutOrgInput, ExecutionUncheckedCreateWithoutOrgInput>
  }

  export type ExecutionUpdateWithWhereUniqueWithoutOrgInput = {
    where: ExecutionWhereUniqueInput
    data: XOR<ExecutionUpdateWithoutOrgInput, ExecutionUncheckedUpdateWithoutOrgInput>
  }

  export type ExecutionUpdateManyWithWhereWithoutOrgInput = {
    where: ExecutionScalarWhereInput
    data: XOR<ExecutionUpdateManyMutationInput, ExecutionUncheckedUpdateManyWithoutOrgInput>
  }

  export type ExecutionScalarWhereInput = {
    AND?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
    OR?: ExecutionScalarWhereInput[]
    NOT?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
    id?: StringFilter<"Execution"> | string
    actionRequestId?: StringFilter<"Execution"> | string
    orgId?: StringFilter<"Execution"> | string
    status?: StringFilter<"Execution"> | string
    result?: JsonNullableFilter<"Execution">
    startedAt?: DateTimeFilter<"Execution"> | Date | string
    completedAt?: DateTimeNullableFilter<"Execution"> | Date | string | null
    error?: StringNullableFilter<"Execution"> | string | null
  }

  export type AuditEventUpsertWithWhereUniqueWithoutOrgInput = {
    where: AuditEventWhereUniqueInput
    update: XOR<AuditEventUpdateWithoutOrgInput, AuditEventUncheckedUpdateWithoutOrgInput>
    create: XOR<AuditEventCreateWithoutOrgInput, AuditEventUncheckedCreateWithoutOrgInput>
  }

  export type AuditEventUpdateWithWhereUniqueWithoutOrgInput = {
    where: AuditEventWhereUniqueInput
    data: XOR<AuditEventUpdateWithoutOrgInput, AuditEventUncheckedUpdateWithoutOrgInput>
  }

  export type AuditEventUpdateManyWithWhereWithoutOrgInput = {
    where: AuditEventScalarWhereInput
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyWithoutOrgInput>
  }

  export type AuditEventScalarWhereInput = {
    AND?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    OR?: AuditEventScalarWhereInput[]
    NOT?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    orgId?: StringFilter<"AuditEvent"> | string
    entityType?: StringFilter<"AuditEvent"> | string
    entityId?: StringFilter<"AuditEvent"> | string
    eventType?: StringFilter<"AuditEvent"> | string
    actorId?: StringFilter<"AuditEvent"> | string
    actorType?: StringFilter<"AuditEvent"> | string
    payload?: JsonNullableFilter<"AuditEvent">
    traceId?: StringFilter<"AuditEvent"> | string
    actionRequestId?: StringNullableFilter<"AuditEvent"> | string | null
    createdAt?: DateTimeFilter<"AuditEvent"> | Date | string
  }

  export type UsageCounterUpsertWithWhereUniqueWithoutOrgInput = {
    where: UsageCounterWhereUniqueInput
    update: XOR<UsageCounterUpdateWithoutOrgInput, UsageCounterUncheckedUpdateWithoutOrgInput>
    create: XOR<UsageCounterCreateWithoutOrgInput, UsageCounterUncheckedCreateWithoutOrgInput>
  }

  export type UsageCounterUpdateWithWhereUniqueWithoutOrgInput = {
    where: UsageCounterWhereUniqueInput
    data: XOR<UsageCounterUpdateWithoutOrgInput, UsageCounterUncheckedUpdateWithoutOrgInput>
  }

  export type UsageCounterUpdateManyWithWhereWithoutOrgInput = {
    where: UsageCounterScalarWhereInput
    data: XOR<UsageCounterUpdateManyMutationInput, UsageCounterUncheckedUpdateManyWithoutOrgInput>
  }

  export type UsageCounterScalarWhereInput = {
    AND?: UsageCounterScalarWhereInput | UsageCounterScalarWhereInput[]
    OR?: UsageCounterScalarWhereInput[]
    NOT?: UsageCounterScalarWhereInput | UsageCounterScalarWhereInput[]
    id?: StringFilter<"UsageCounter"> | string
    orgId?: StringFilter<"UsageCounter"> | string
    period?: StringFilter<"UsageCounter"> | string
    actionsChecked?: IntFilter<"UsageCounter"> | number
    actionsAllowed?: IntFilter<"UsageCounter"> | number
    actionsApproved?: IntFilter<"UsageCounter"> | number
    actionsDenied?: IntFilter<"UsageCounter"> | number
    updatedAt?: DateTimeFilter<"UsageCounter"> | Date | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agents?: AgentCreateNestedManyWithoutOrgInput
    policies?: PolicyCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestCreateNestedManyWithoutOrgInput
    approvals?: ApprovalCreateNestedManyWithoutOrgInput
    executions?: ExecutionCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agents?: AgentUncheckedCreateNestedManyWithoutOrgInput
    policies?: PolicyUncheckedCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutOrgInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutOrgInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agents?: AgentUpdateManyWithoutOrgNestedInput
    policies?: PolicyUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agents?: AgentUncheckedUpdateManyWithoutOrgNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateWithoutAgentsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    policies?: PolicyCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestCreateNestedManyWithoutOrgInput
    approvals?: ApprovalCreateNestedManyWithoutOrgInput
    executions?: ExecutionCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutAgentsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    policies?: PolicyUncheckedCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutOrgInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutOrgInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutAgentsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAgentsInput, OrganizationUncheckedCreateWithoutAgentsInput>
  }

  export type ActionRequestCreateWithoutAgentInput = {
    id?: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutActionRequestsInput
    policy?: PolicyCreateNestedOneWithoutActionRequestsInput
    approval?: ApprovalCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestUncheckedCreateWithoutAgentInput = {
    id?: string
    orgId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
    approval?: ApprovalUncheckedCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionUncheckedCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestCreateOrConnectWithoutAgentInput = {
    where: ActionRequestWhereUniqueInput
    create: XOR<ActionRequestCreateWithoutAgentInput, ActionRequestUncheckedCreateWithoutAgentInput>
  }

  export type ActionRequestCreateManyAgentInputEnvelope = {
    data: ActionRequestCreateManyAgentInput | ActionRequestCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutAgentsInput = {
    update: XOR<OrganizationUpdateWithoutAgentsInput, OrganizationUncheckedUpdateWithoutAgentsInput>
    create: XOR<OrganizationCreateWithoutAgentsInput, OrganizationUncheckedCreateWithoutAgentsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAgentsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAgentsInput, OrganizationUncheckedUpdateWithoutAgentsInput>
  }

  export type OrganizationUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    policies?: PolicyUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ActionRequestUpsertWithWhereUniqueWithoutAgentInput = {
    where: ActionRequestWhereUniqueInput
    update: XOR<ActionRequestUpdateWithoutAgentInput, ActionRequestUncheckedUpdateWithoutAgentInput>
    create: XOR<ActionRequestCreateWithoutAgentInput, ActionRequestUncheckedCreateWithoutAgentInput>
  }

  export type ActionRequestUpdateWithWhereUniqueWithoutAgentInput = {
    where: ActionRequestWhereUniqueInput
    data: XOR<ActionRequestUpdateWithoutAgentInput, ActionRequestUncheckedUpdateWithoutAgentInput>
  }

  export type ActionRequestUpdateManyWithWhereWithoutAgentInput = {
    where: ActionRequestScalarWhereInput
    data: XOR<ActionRequestUpdateManyMutationInput, ActionRequestUncheckedUpdateManyWithoutAgentInput>
  }

  export type OrganizationCreateWithoutPoliciesInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    agents?: AgentCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestCreateNestedManyWithoutOrgInput
    approvals?: ApprovalCreateNestedManyWithoutOrgInput
    executions?: ExecutionCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutPoliciesInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    agents?: AgentUncheckedCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutOrgInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutOrgInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutPoliciesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPoliciesInput, OrganizationUncheckedCreateWithoutPoliciesInput>
  }

  export type ActionRequestCreateWithoutPolicyInput = {
    id?: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutActionRequestsInput
    agent: AgentCreateNestedOneWithoutActionRequestsInput
    approval?: ApprovalCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestUncheckedCreateWithoutPolicyInput = {
    id?: string
    orgId: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
    approval?: ApprovalUncheckedCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionUncheckedCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestCreateOrConnectWithoutPolicyInput = {
    where: ActionRequestWhereUniqueInput
    create: XOR<ActionRequestCreateWithoutPolicyInput, ActionRequestUncheckedCreateWithoutPolicyInput>
  }

  export type ActionRequestCreateManyPolicyInputEnvelope = {
    data: ActionRequestCreateManyPolicyInput | ActionRequestCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutPoliciesInput = {
    update: XOR<OrganizationUpdateWithoutPoliciesInput, OrganizationUncheckedUpdateWithoutPoliciesInput>
    create: XOR<OrganizationCreateWithoutPoliciesInput, OrganizationUncheckedCreateWithoutPoliciesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPoliciesInput, OrganizationUncheckedUpdateWithoutPoliciesInput>
  }

  export type OrganizationUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    agents?: AgentUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    agents?: AgentUncheckedUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ActionRequestUpsertWithWhereUniqueWithoutPolicyInput = {
    where: ActionRequestWhereUniqueInput
    update: XOR<ActionRequestUpdateWithoutPolicyInput, ActionRequestUncheckedUpdateWithoutPolicyInput>
    create: XOR<ActionRequestCreateWithoutPolicyInput, ActionRequestUncheckedCreateWithoutPolicyInput>
  }

  export type ActionRequestUpdateWithWhereUniqueWithoutPolicyInput = {
    where: ActionRequestWhereUniqueInput
    data: XOR<ActionRequestUpdateWithoutPolicyInput, ActionRequestUncheckedUpdateWithoutPolicyInput>
  }

  export type ActionRequestUpdateManyWithWhereWithoutPolicyInput = {
    where: ActionRequestScalarWhereInput
    data: XOR<ActionRequestUpdateManyMutationInput, ActionRequestUncheckedUpdateManyWithoutPolicyInput>
  }

  export type OrganizationCreateWithoutActionRequestsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    agents?: AgentCreateNestedManyWithoutOrgInput
    policies?: PolicyCreateNestedManyWithoutOrgInput
    approvals?: ApprovalCreateNestedManyWithoutOrgInput
    executions?: ExecutionCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutActionRequestsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    agents?: AgentUncheckedCreateNestedManyWithoutOrgInput
    policies?: PolicyUncheckedCreateNestedManyWithoutOrgInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutOrgInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutActionRequestsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutActionRequestsInput, OrganizationUncheckedCreateWithoutActionRequestsInput>
  }

  export type AgentCreateWithoutActionRequestsInput = {
    id?: string
    name: string
    description?: string | null
    apiKey?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutAgentsInput
  }

  export type AgentUncheckedCreateWithoutActionRequestsInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    apiKey?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentCreateOrConnectWithoutActionRequestsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutActionRequestsInput, AgentUncheckedCreateWithoutActionRequestsInput>
  }

  export type PolicyCreateWithoutActionRequestsInput = {
    id?: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    priority?: number
    enabled?: boolean
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutPoliciesInput
  }

  export type PolicyUncheckedCreateWithoutActionRequestsInput = {
    id?: string
    orgId: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    priority?: number
    enabled?: boolean
    createdAt?: Date | string
  }

  export type PolicyCreateOrConnectWithoutActionRequestsInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutActionRequestsInput, PolicyUncheckedCreateWithoutActionRequestsInput>
  }

  export type ApprovalCreateWithoutActionRequestInput = {
    id?: string
    requestedBy: string
    assignedTo?: string | null
    status?: string
    decidedAt?: Date | string | null
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalUncheckedCreateWithoutActionRequestInput = {
    id?: string
    orgId: string
    requestedBy: string
    assignedTo?: string | null
    status?: string
    decidedAt?: Date | string | null
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApprovalCreateOrConnectWithoutActionRequestInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutActionRequestInput, ApprovalUncheckedCreateWithoutActionRequestInput>
  }

  export type ExecutionCreateWithoutActionRequestInput = {
    id?: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    error?: string | null
    org: OrganizationCreateNestedOneWithoutExecutionsInput
  }

  export type ExecutionUncheckedCreateWithoutActionRequestInput = {
    id?: string
    orgId: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    error?: string | null
  }

  export type ExecutionCreateOrConnectWithoutActionRequestInput = {
    where: ExecutionWhereUniqueInput
    create: XOR<ExecutionCreateWithoutActionRequestInput, ExecutionUncheckedCreateWithoutActionRequestInput>
  }

  export type AuditEventCreateWithoutActionRequestInput = {
    id?: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutAuditEventsInput
  }

  export type AuditEventUncheckedCreateWithoutActionRequestInput = {
    id?: string
    orgId: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    createdAt?: Date | string
  }

  export type AuditEventCreateOrConnectWithoutActionRequestInput = {
    where: AuditEventWhereUniqueInput
    create: XOR<AuditEventCreateWithoutActionRequestInput, AuditEventUncheckedCreateWithoutActionRequestInput>
  }

  export type AuditEventCreateManyActionRequestInputEnvelope = {
    data: AuditEventCreateManyActionRequestInput | AuditEventCreateManyActionRequestInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutActionRequestsInput = {
    update: XOR<OrganizationUpdateWithoutActionRequestsInput, OrganizationUncheckedUpdateWithoutActionRequestsInput>
    create: XOR<OrganizationCreateWithoutActionRequestsInput, OrganizationUncheckedCreateWithoutActionRequestsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutActionRequestsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutActionRequestsInput, OrganizationUncheckedUpdateWithoutActionRequestsInput>
  }

  export type OrganizationUpdateWithoutActionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    agents?: AgentUpdateManyWithoutOrgNestedInput
    policies?: PolicyUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutActionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    agents?: AgentUncheckedUpdateManyWithoutOrgNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type AgentUpsertWithoutActionRequestsInput = {
    update: XOR<AgentUpdateWithoutActionRequestsInput, AgentUncheckedUpdateWithoutActionRequestsInput>
    create: XOR<AgentCreateWithoutActionRequestsInput, AgentUncheckedCreateWithoutActionRequestsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutActionRequestsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutActionRequestsInput, AgentUncheckedUpdateWithoutActionRequestsInput>
  }

  export type AgentUpdateWithoutActionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type AgentUncheckedUpdateWithoutActionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUpsertWithoutActionRequestsInput = {
    update: XOR<PolicyUpdateWithoutActionRequestsInput, PolicyUncheckedUpdateWithoutActionRequestsInput>
    create: XOR<PolicyCreateWithoutActionRequestsInput, PolicyUncheckedCreateWithoutActionRequestsInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutActionRequestsInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutActionRequestsInput, PolicyUncheckedUpdateWithoutActionRequestsInput>
  }

  export type PolicyUpdateWithoutActionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutPoliciesNestedInput
  }

  export type PolicyUncheckedUpdateWithoutActionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUpsertWithoutActionRequestInput = {
    update: XOR<ApprovalUpdateWithoutActionRequestInput, ApprovalUncheckedUpdateWithoutActionRequestInput>
    create: XOR<ApprovalCreateWithoutActionRequestInput, ApprovalUncheckedCreateWithoutActionRequestInput>
    where?: ApprovalWhereInput
  }

  export type ApprovalUpdateToOneWithWhereWithoutActionRequestInput = {
    where?: ApprovalWhereInput
    data: XOR<ApprovalUpdateWithoutActionRequestInput, ApprovalUncheckedUpdateWithoutActionRequestInput>
  }

  export type ApprovalUpdateWithoutActionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutActionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionUpsertWithoutActionRequestInput = {
    update: XOR<ExecutionUpdateWithoutActionRequestInput, ExecutionUncheckedUpdateWithoutActionRequestInput>
    create: XOR<ExecutionCreateWithoutActionRequestInput, ExecutionUncheckedCreateWithoutActionRequestInput>
    where?: ExecutionWhereInput
  }

  export type ExecutionUpdateToOneWithWhereWithoutActionRequestInput = {
    where?: ExecutionWhereInput
    data: XOR<ExecutionUpdateWithoutActionRequestInput, ExecutionUncheckedUpdateWithoutActionRequestInput>
  }

  export type ExecutionUpdateWithoutActionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    org?: OrganizationUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type ExecutionUncheckedUpdateWithoutActionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditEventUpsertWithWhereUniqueWithoutActionRequestInput = {
    where: AuditEventWhereUniqueInput
    update: XOR<AuditEventUpdateWithoutActionRequestInput, AuditEventUncheckedUpdateWithoutActionRequestInput>
    create: XOR<AuditEventCreateWithoutActionRequestInput, AuditEventUncheckedCreateWithoutActionRequestInput>
  }

  export type AuditEventUpdateWithWhereUniqueWithoutActionRequestInput = {
    where: AuditEventWhereUniqueInput
    data: XOR<AuditEventUpdateWithoutActionRequestInput, AuditEventUncheckedUpdateWithoutActionRequestInput>
  }

  export type AuditEventUpdateManyWithWhereWithoutActionRequestInput = {
    where: AuditEventScalarWhereInput
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyWithoutActionRequestInput>
  }

  export type OrganizationCreateWithoutApprovalsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    agents?: AgentCreateNestedManyWithoutOrgInput
    policies?: PolicyCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestCreateNestedManyWithoutOrgInput
    executions?: ExecutionCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutApprovalsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    agents?: AgentUncheckedCreateNestedManyWithoutOrgInput
    policies?: PolicyUncheckedCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutOrgInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutApprovalsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutApprovalsInput, OrganizationUncheckedCreateWithoutApprovalsInput>
  }

  export type ActionRequestCreateWithoutApprovalInput = {
    id?: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutActionRequestsInput
    agent: AgentCreateNestedOneWithoutActionRequestsInput
    policy?: PolicyCreateNestedOneWithoutActionRequestsInput
    execution?: ExecutionCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestUncheckedCreateWithoutApprovalInput = {
    id?: string
    orgId: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
    execution?: ExecutionUncheckedCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestCreateOrConnectWithoutApprovalInput = {
    where: ActionRequestWhereUniqueInput
    create: XOR<ActionRequestCreateWithoutApprovalInput, ActionRequestUncheckedCreateWithoutApprovalInput>
  }

  export type OrganizationUpsertWithoutApprovalsInput = {
    update: XOR<OrganizationUpdateWithoutApprovalsInput, OrganizationUncheckedUpdateWithoutApprovalsInput>
    create: XOR<OrganizationCreateWithoutApprovalsInput, OrganizationUncheckedCreateWithoutApprovalsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutApprovalsInput, OrganizationUncheckedUpdateWithoutApprovalsInput>
  }

  export type OrganizationUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    agents?: AgentUpdateManyWithoutOrgNestedInput
    policies?: PolicyUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    agents?: AgentUncheckedUpdateManyWithoutOrgNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ActionRequestUpsertWithoutApprovalInput = {
    update: XOR<ActionRequestUpdateWithoutApprovalInput, ActionRequestUncheckedUpdateWithoutApprovalInput>
    create: XOR<ActionRequestCreateWithoutApprovalInput, ActionRequestUncheckedCreateWithoutApprovalInput>
    where?: ActionRequestWhereInput
  }

  export type ActionRequestUpdateToOneWithWhereWithoutApprovalInput = {
    where?: ActionRequestWhereInput
    data: XOR<ActionRequestUpdateWithoutApprovalInput, ActionRequestUncheckedUpdateWithoutApprovalInput>
  }

  export type ActionRequestUpdateWithoutApprovalInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutActionRequestsNestedInput
    agent?: AgentUpdateOneRequiredWithoutActionRequestsNestedInput
    policy?: PolicyUpdateOneWithoutActionRequestsNestedInput
    execution?: ExecutionUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateWithoutApprovalInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    execution?: ExecutionUncheckedUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActionRequestNestedInput
  }

  export type OrganizationCreateWithoutExecutionsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    agents?: AgentCreateNestedManyWithoutOrgInput
    policies?: PolicyCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestCreateNestedManyWithoutOrgInput
    approvals?: ApprovalCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutExecutionsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    agents?: AgentUncheckedCreateNestedManyWithoutOrgInput
    policies?: PolicyUncheckedCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutOrgInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutExecutionsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutExecutionsInput, OrganizationUncheckedCreateWithoutExecutionsInput>
  }

  export type ActionRequestCreateWithoutExecutionInput = {
    id?: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutActionRequestsInput
    agent: AgentCreateNestedOneWithoutActionRequestsInput
    policy?: PolicyCreateNestedOneWithoutActionRequestsInput
    approval?: ApprovalCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestUncheckedCreateWithoutExecutionInput = {
    id?: string
    orgId: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
    approval?: ApprovalUncheckedCreateNestedOneWithoutActionRequestInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActionRequestInput
  }

  export type ActionRequestCreateOrConnectWithoutExecutionInput = {
    where: ActionRequestWhereUniqueInput
    create: XOR<ActionRequestCreateWithoutExecutionInput, ActionRequestUncheckedCreateWithoutExecutionInput>
  }

  export type OrganizationUpsertWithoutExecutionsInput = {
    update: XOR<OrganizationUpdateWithoutExecutionsInput, OrganizationUncheckedUpdateWithoutExecutionsInput>
    create: XOR<OrganizationCreateWithoutExecutionsInput, OrganizationUncheckedCreateWithoutExecutionsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutExecutionsInput, OrganizationUncheckedUpdateWithoutExecutionsInput>
  }

  export type OrganizationUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    agents?: AgentUpdateManyWithoutOrgNestedInput
    policies?: PolicyUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    agents?: AgentUncheckedUpdateManyWithoutOrgNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ActionRequestUpsertWithoutExecutionInput = {
    update: XOR<ActionRequestUpdateWithoutExecutionInput, ActionRequestUncheckedUpdateWithoutExecutionInput>
    create: XOR<ActionRequestCreateWithoutExecutionInput, ActionRequestUncheckedCreateWithoutExecutionInput>
    where?: ActionRequestWhereInput
  }

  export type ActionRequestUpdateToOneWithWhereWithoutExecutionInput = {
    where?: ActionRequestWhereInput
    data: XOR<ActionRequestUpdateWithoutExecutionInput, ActionRequestUncheckedUpdateWithoutExecutionInput>
  }

  export type ActionRequestUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutActionRequestsNestedInput
    agent?: AgentUpdateOneRequiredWithoutActionRequestsNestedInput
    policy?: PolicyUpdateOneWithoutActionRequestsNestedInput
    approval?: ApprovalUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUncheckedUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActionRequestNestedInput
  }

  export type OrganizationCreateWithoutAuditEventsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    agents?: AgentCreateNestedManyWithoutOrgInput
    policies?: PolicyCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestCreateNestedManyWithoutOrgInput
    approvals?: ApprovalCreateNestedManyWithoutOrgInput
    executions?: ExecutionCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutAuditEventsInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    agents?: AgentUncheckedCreateNestedManyWithoutOrgInput
    policies?: PolicyUncheckedCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutOrgInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutOrgInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutOrgInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutAuditEventsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAuditEventsInput, OrganizationUncheckedCreateWithoutAuditEventsInput>
  }

  export type ActionRequestCreateWithoutAuditEventsInput = {
    id?: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutActionRequestsInput
    agent: AgentCreateNestedOneWithoutActionRequestsInput
    policy?: PolicyCreateNestedOneWithoutActionRequestsInput
    approval?: ApprovalCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionCreateNestedOneWithoutActionRequestInput
  }

  export type ActionRequestUncheckedCreateWithoutAuditEventsInput = {
    id?: string
    orgId: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
    approval?: ApprovalUncheckedCreateNestedOneWithoutActionRequestInput
    execution?: ExecutionUncheckedCreateNestedOneWithoutActionRequestInput
  }

  export type ActionRequestCreateOrConnectWithoutAuditEventsInput = {
    where: ActionRequestWhereUniqueInput
    create: XOR<ActionRequestCreateWithoutAuditEventsInput, ActionRequestUncheckedCreateWithoutAuditEventsInput>
  }

  export type OrganizationUpsertWithoutAuditEventsInput = {
    update: XOR<OrganizationUpdateWithoutAuditEventsInput, OrganizationUncheckedUpdateWithoutAuditEventsInput>
    create: XOR<OrganizationCreateWithoutAuditEventsInput, OrganizationUncheckedCreateWithoutAuditEventsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAuditEventsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAuditEventsInput, OrganizationUncheckedUpdateWithoutAuditEventsInput>
  }

  export type OrganizationUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    agents?: AgentUpdateManyWithoutOrgNestedInput
    policies?: PolicyUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    agents?: AgentUncheckedUpdateManyWithoutOrgNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutOrgNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ActionRequestUpsertWithoutAuditEventsInput = {
    update: XOR<ActionRequestUpdateWithoutAuditEventsInput, ActionRequestUncheckedUpdateWithoutAuditEventsInput>
    create: XOR<ActionRequestCreateWithoutAuditEventsInput, ActionRequestUncheckedCreateWithoutAuditEventsInput>
    where?: ActionRequestWhereInput
  }

  export type ActionRequestUpdateToOneWithWhereWithoutAuditEventsInput = {
    where?: ActionRequestWhereInput
    data: XOR<ActionRequestUpdateWithoutAuditEventsInput, ActionRequestUncheckedUpdateWithoutAuditEventsInput>
  }

  export type ActionRequestUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutActionRequestsNestedInput
    agent?: AgentUpdateOneRequiredWithoutActionRequestsNestedInput
    policy?: PolicyUpdateOneWithoutActionRequestsNestedInput
    approval?: ApprovalUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUpdateOneWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUncheckedUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUncheckedUpdateOneWithoutActionRequestNestedInput
  }

  export type OrganizationCreateWithoutUsageCountersInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    agents?: AgentCreateNestedManyWithoutOrgInput
    policies?: PolicyCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestCreateNestedManyWithoutOrgInput
    approvals?: ApprovalCreateNestedManyWithoutOrgInput
    executions?: ExecutionCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutUsageCountersInput = {
    id?: string
    name: string
    slug: string
    apiKey?: string
    plan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    agents?: AgentUncheckedCreateNestedManyWithoutOrgInput
    policies?: PolicyUncheckedCreateNestedManyWithoutOrgInput
    actionRequests?: ActionRequestUncheckedCreateNestedManyWithoutOrgInput
    approvals?: ApprovalUncheckedCreateNestedManyWithoutOrgInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutOrgInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutUsageCountersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsageCountersInput, OrganizationUncheckedCreateWithoutUsageCountersInput>
  }

  export type OrganizationUpsertWithoutUsageCountersInput = {
    update: XOR<OrganizationUpdateWithoutUsageCountersInput, OrganizationUncheckedUpdateWithoutUsageCountersInput>
    create: XOR<OrganizationCreateWithoutUsageCountersInput, OrganizationUncheckedCreateWithoutUsageCountersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsageCountersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsageCountersInput, OrganizationUncheckedUpdateWithoutUsageCountersInput>
  }

  export type OrganizationUpdateWithoutUsageCountersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    agents?: AgentUpdateManyWithoutOrgNestedInput
    policies?: PolicyUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsageCountersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    agents?: AgentUncheckedUpdateManyWithoutOrgNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutOrgNestedInput
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutOrgNestedInput
    approvals?: ApprovalUncheckedUpdateManyWithoutOrgNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutOrgNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UserCreateManyOrgInput = {
    id?: string
    clerkId: string
    email: string
    role?: string
    createdAt?: Date | string
  }

  export type AgentCreateManyOrgInput = {
    id?: string
    name: string
    description?: string | null
    apiKey?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PolicyCreateManyOrgInput = {
    id?: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    priority?: number
    enabled?: boolean
    createdAt?: Date | string
  }

  export type ActionRequestCreateManyOrgInput = {
    id?: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
  }

  export type ApprovalCreateManyOrgInput = {
    id?: string
    actionRequestId: string
    requestedBy: string
    assignedTo?: string | null
    status?: string
    decidedAt?: Date | string | null
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ExecutionCreateManyOrgInput = {
    id?: string
    actionRequestId: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    error?: string | null
  }

  export type AuditEventCreateManyOrgInput = {
    id?: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    actionRequestId?: string | null
    createdAt?: Date | string
  }

  export type UsageCounterCreateManyOrgInput = {
    id?: string
    period: string
    actionsChecked?: number
    actionsAllowed?: number
    actionsApproved?: number
    actionsDenied?: number
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionRequests?: ActionRequestUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionRequests?: ActionRequestUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionRequests?: ActionRequestUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionRequestUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutActionRequestsNestedInput
    policy?: PolicyUpdateOneWithoutActionRequestsNestedInput
    approval?: ApprovalUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUncheckedUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUncheckedUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionRequest?: ActionRequestUpdateOneRequiredWithoutApprovalNestedInput
  }

  export type ApprovalUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionRequestId?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionRequestId?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    actionRequest?: ActionRequestUpdateOneRequiredWithoutExecutionNestedInput
  }

  export type ExecutionUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionRequestId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionRequestId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditEventUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actionRequest?: ActionRequestUpdateOneWithoutAuditEventsNestedInput
  }

  export type AuditEventUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    actionRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    actionRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    actionsChecked?: IntFieldUpdateOperationsInput | number
    actionsAllowed?: IntFieldUpdateOperationsInput | number
    actionsApproved?: IntFieldUpdateOperationsInput | number
    actionsDenied?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    actionsChecked?: IntFieldUpdateOperationsInput | number
    actionsAllowed?: IntFieldUpdateOperationsInput | number
    actionsApproved?: IntFieldUpdateOperationsInput | number
    actionsDenied?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    actionsChecked?: IntFieldUpdateOperationsInput | number
    actionsAllowed?: IntFieldUpdateOperationsInput | number
    actionsApproved?: IntFieldUpdateOperationsInput | number
    actionsDenied?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionRequestCreateManyAgentInput = {
    id?: string
    orgId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    policyId?: string | null
    traceId?: string
    createdAt?: Date | string
  }

  export type ActionRequestUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutActionRequestsNestedInput
    policy?: PolicyUpdateOneWithoutActionRequestsNestedInput
    approval?: ApprovalUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUncheckedUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUncheckedUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionRequestCreateManyPolicyInput = {
    id?: string
    orgId: string
    agentId: string
    actionType: string
    payload: JsonNullValueInput | InputJsonValue
    riskScore?: number
    decision?: string
    traceId?: string
    createdAt?: Date | string
  }

  export type ActionRequestUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutActionRequestsNestedInput
    agent?: AgentUpdateOneRequiredWithoutActionRequestsNestedInput
    approval?: ApprovalUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: ApprovalUncheckedUpdateOneWithoutActionRequestNestedInput
    execution?: ExecutionUncheckedUpdateOneWithoutActionRequestNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActionRequestNestedInput
  }

  export type ActionRequestUncheckedUpdateManyWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    riskScore?: FloatFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateManyActionRequestInput = {
    id?: string
    orgId: string
    entityType: string
    entityId: string
    eventType: string
    actorId: string
    actorType: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId: string
    createdAt?: Date | string
  }

  export type AuditEventUpdateWithoutActionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutAuditEventsNestedInput
  }

  export type AuditEventUncheckedUpdateWithoutActionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyWithoutActionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    traceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}