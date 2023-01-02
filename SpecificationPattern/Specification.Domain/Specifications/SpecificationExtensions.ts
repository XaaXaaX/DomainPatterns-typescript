import { 
    AndSpecification, 
    NotSpecification, 
    OrSpecification, 
    XAndSpecification 
} from "./CompositeSepcification";
import { ISpecification } from "./ISpecification";
import { Specification } from "./Specification";

declare module "./Specification" {
    interface Specification<T> {
        And<T>(spec: ISpecification<T>): Specification<T>;
        Or<T>(spec: ISpecification<T>): Specification<T>;
        XAnd<T>(spec: ISpecification<T>): Specification<T>;
        Not<T>(): ISpecification<T>;
    }
}

Specification.prototype.And = function<T>(spec: ISpecification<T>): Specification<T> {
    return new AndSpecification<T>(this, spec);
}

Specification.prototype.Or = function<T>(spec: ISpecification<T>): Specification<T> {
    return new OrSpecification<T>(this, spec);
}

Specification.prototype.XAnd = function<T>(spec: ISpecification<T>): Specification<T> {
    return new XAndSpecification<T>(this, spec);
}

Specification.prototype.Not = function<T>(): Specification<T> {
    return new NotSpecification<T>(this);
}

export {};
