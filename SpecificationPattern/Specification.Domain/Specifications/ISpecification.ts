interface ISpecification<T>
{
    IsSatisfiedBy(model: T): boolean;
}

export { ISpecification }
