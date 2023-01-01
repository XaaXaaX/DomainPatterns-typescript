import { ISpecification } from "./ISpecification";

abstract class PairSpecification<T> implements ISpecification<T>
{
    protected readonly left: ISpecification<T>;
    protected readonly right: ISpecification<T>;
    protected constructor(left: ISpecification<T>, right: ISpecification<T>)
    {
        this.left = left;
        this.right = right;

    }
    public abstract IsSatisfiedBy(model: T): boolean;
}

class AndSpecification<T> extends PairSpecification<T>
{
    constructor(left: ISpecification<T>, right: ISpecification<T>) {
        super(left, right);
    }

    public IsSatisfiedBy(model: T): boolean
    {
        return this.left.IsSatisfiedBy(model) && this.right.IsSatisfiedBy(model);
    }
}

class XAndSpecification<T> extends PairSpecification<T>
{
    public constructor(left: ISpecification<T> , right: ISpecification<T> ) {
        super(left, right); 
    }
    public override IsSatisfiedBy(model: T): boolean
    {
        return (this.left.IsSatisfiedBy(model) && this.right.IsSatisfiedBy(model)) || 
                (!this.left.IsSatisfiedBy(model) && !this.right.IsSatisfiedBy(model));
    }
}

class OrSpecification<T> extends PairSpecification<T>
{
    public constructor(left: ISpecification<T>, right: ISpecification<T>) {
        super(left, right)
    }

    public override IsSatisfiedBy(model: T): boolean
    {
        return this.left.IsSatisfiedBy(model) || this.right.IsSatisfiedBy(model);
    }
}
class NotSpecification<T> implements ISpecification<T>
{
    private readonly specification: ISpecification<T>;
    public constructor(specification: ISpecification<T>)
    {
        this.specification = specification;

    }
    public IsSatisfiedBy(model: T): boolean
    {
        return !this.specification.IsSatisfiedBy(model);
    }
}

export {
    AndSpecification,
    XAndSpecification,
    NotSpecification,
    OrSpecification,
    PairSpecification
};