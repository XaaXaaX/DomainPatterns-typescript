import { ISpecification } from "./ISpecification";

abstract class Specification<in T> implements ISpecification<T>
{
    abstract IsSatisfiedBy(model: T): boolean;
}

export { Specification }
