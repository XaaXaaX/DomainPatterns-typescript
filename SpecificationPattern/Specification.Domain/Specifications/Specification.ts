import { ISpecification } from "./ISpecification";

abstract class Specification<T> implements ISpecification<T>
{
    abstract IsSatisfiedBy(model: T): boolean;
}

export { Specification }
