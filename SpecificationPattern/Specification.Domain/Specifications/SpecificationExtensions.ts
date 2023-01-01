import { 
    AndSpecification, 
    OrSpecification, 
    XAndSpecification 
} from "./CompositeSepcification";
import { ISpecification } from "./ISpecification";
import { Specification } from "./Specification";

declare module "./Specification" {
    interface Specification<T> {
        And(spec: ISpecification<T>): ISpecification<T>;
        Or(spec: ISpecification<T>): ISpecification<T>;
        XAnd(spec: ISpecification<T>): ISpecification<T>;
    }
}

Specification.prototype.And = <T>(spec: ISpecification<T>): ISpecification<T> => {
    return new AndSpecification<T>(this, spec);
}
Specification.prototype.Or = <T>(spec: ISpecification<T>): ISpecification<T> => {
    return new OrSpecification<T>(this, spec);
}
Specification.prototype.XAnd = <T>(spec: ISpecification<T>): ISpecification<T> => {
    return new XAndSpecification<T>(this, spec);
}

export {};
