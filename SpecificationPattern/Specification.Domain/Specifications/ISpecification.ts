interface ISpecification<in T>
{
    IsSatisfiedBy(model: T): boolean;
}

export { ISpecification }
