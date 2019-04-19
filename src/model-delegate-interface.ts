/*
* Copyright (c) 2019 Yellicode
*
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/**
* This code was generated by a tool.
* 
* Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
*/
import * as elements from './interfaces';

export interface ModelDelegate {

	/**
	* Gets the text contents of the first comment in the element's owned comments, or an empty string if
	* the element has no comments.
	*/
	getFirstCommentBody(element: elements.Element): string;

	/**
	* Gets the name of the typed element's type.
	*/
	getTypeName(element: elements.TypedElement): string;

	/**
	* Gets the string representation of the value.
	*/
	getStringValue(element: elements.ValueSpecification): string;

	/**
	* Gets underlying value of the ValueSpecification. The type depends on the type of ValueSpecification.
	*/
	getValue(element: elements.ValueSpecification): any | null;

	/**
	* Gets the package that owns the packageable element. This property is derived.
	*/
	getPackage(element: elements.PackageableElement): elements.Package;

	/**
	* Constructs a name from the names of the nesting packages. The name is constructed working inwards
	* from the package that is defined as namespace root up to but not including the PackageableElement
	* itself.
	*/
	getNamespaceName(element: elements.PackageableElement, separator?: string): string;

	/**
	* Gets all packages that contain this Package, working inwards from the top Package to the owning
	* package.
	*/
	getNestingPackages(element: elements.PackageableElement): elements.Package[];

	/**
	* Constructs a name from the PackageableElement and the names of the nesting packages. The name is
	* constructed working inwards from the package that is defined as namespace root up to and including
	* the PackageableElement itself.
	*/
	getQualifiedName(element: elements.PackageableElement, separator?: string): string;

	/**
	* Returns all of the direct and indirect ancestors of a generalized Classifier, working outwards: more
	* specific classifiers will appear before more general classifiers.
	*/
	getAllParents(element: elements.Classifier): elements.Classifier[];

	/**
	* Gets all classifiers of which this element is a direct or indirect general.
	*/
	getAllSpecializations(element: elements.Classifier): elements.Classifier[];

	/**
	* Gets the first direct generalization relationship of the element.
	*/
	getFirstGeneralization(element: elements.Classifier): elements.Generalization | null;

	/**
	* Gets the first classifier that is an immediate general of the current element.
	*/
	getFirstParent(element: elements.Classifier): elements.Classifier | null;

	/**
	* Gives all of the immediate ancestors of a generalized Classifier.
	*/
	getParents(element: elements.Classifier): elements.Classifier[];

	/**
	* Gets all classifiers of which this classifier is a direct general.
	*/
	getSpecializations(element: elements.Classifier): elements.Classifier[];

	/**
	* Gets the lower bound of the multiplicity interval.
	*/
	getLower(element: elements.MultiplicityElement): number | null;

	/**
	* The upper bound of the multiplicity interval.
	*/
	getUpper(element: elements.MultiplicityElement): elements.UnlimitedNatural | null;

	/**
	* The query lowerBound() returns the lower bound of the multiplicity as an integer, which is the
	* integerValue of lowerValue, if this is given, and 1 otherwise.
	*/
	getLowerBound(element: elements.MultiplicityElement): number;

	/**
	* The query upperBound() returns the upper bound of the multiplicity for a bounded multiplicity as an
	* unlimited natural, which is the unlimitedNaturalValue of upperValue, if given, and 1, otherwise.
	*/
	getUpperBound(element: elements.MultiplicityElement): elements.UnlimitedNatural;

	/**
	* The query isMultivalued() checks whether this multiplicity has an upper bound greater than one.
	*/
	isMultivalued(element: elements.MultiplicityElement): boolean;

	/**
	* The query isOptional checks whether this multiplicity has a lower bound of 0 (0..n).
	*/
	isOptional(element: elements.MultiplicityElement): boolean;

	/**
	* The query isOptionalAndSingleValued checks whether this multiplicity has a lower bound of 0 and an
	* upper bound of 1 (0..1).
	*/
	isOptionalAndSinglevalued(element: elements.MultiplicityElement): boolean;

	/**
	* The query isRequiredAndSinglevalued checks whether this multiplicity has a lower bound of 1 and an
	* upper bound of 1 (1..1).
	*/
	isRequiredAndSinglevalued(element: elements.MultiplicityElement): boolean;

	/**
	* Returns both inherited and owned attributes.
	*/
	getAllAttributes(element: elements.MemberedClassifier): elements.Property[];

	/**
	* Returns both inherited and owned operations. Any inherited operation that has the same signature
	* (having the same name and parameter type order) in an inheriting type is not included.
	*/
	getAllOperations(element: elements.MemberedClassifier): elements.Operation[];

	/**
	* Gets the superclasses of a Class, derived from its Generalizations.
	*/
	getSuperClasses(element: elements.Class): elements.Class[];

	/**
	* The Association of which this Property is a member, if any.
	*/
	getAssociation(element: elements.Property): elements.Association | null;

	/**
	* Gets the value of the DefaultValue property.
	*/
	getDefault(element: elements.Property): any | null;

	/**
	* Gets all classes that are owned by this Package, including the ones owned by nested packages.
	*/
	getAllClasses(element: elements.Package): elements.Class[];

	/**
	* Gets all data types that are owned by this Package, including the ones owned by nested packages.
	*/
	getAllDataTypes(element: elements.Package): elements.DataType[];

	/**
	* Gets all enumerations that are owned by this Package, including the ones owned by nested packages.
	*/
	getAllEnumerations(element: elements.Package): elements.Enumeration[];

	/**
	* Gets all interfaces that are owned by this Package, including the ones owned by nested packages.
	*/
	getAllInterfaces(element: elements.Package): elements.Interface[];

	/**
	* Gets all types that are owned by this Package, including the ones owned by nested packages. This
	* includes the following types of elements: Class, Interface, DataType, PrimitiveType and Enumeration.
	*/
	getAllTypes(element: elements.Package): elements.Classifier[];

	/**
	* Gets all classes that are owned by this Package.
	*/
	getClasses(element: elements.Package): elements.Class[];

	/**
	* Gets all data types that are owned by this Package.
	*/
	getDataTypes(element: elements.Package): elements.DataType[];

	/**
	* Gets all enumerations that are owned by this Package.
	*/
	getEnumerations(element: elements.Package): elements.Enumeration[];

	/**
	* Gets all interfaces that are owned by this Package.
	*/
	getInterfaces(element: elements.Package): elements.Interface[];

	/**
	* Gets all packages that are owned by this Package.
	*/
	getNestedPackages(element: elements.Package): elements.Package[];

	/**
	* Gets all types that are owned by this Package. This includes the following types of elements: Class,
	* Interface, DataType, PrimitiveType and Enumeration.
	*/
	getTypes(element: elements.Package): elements.Classifier[];

	/**
	* Gets the value of the DefaultValue property.
	*/
	getDefault(element: elements.Parameter): any | null;

	/**
	* Gets the lower bound of the return parameter, if present. This information is derived from the
	* return result for this Operation.
	*/
	getLower(element: elements.Operation): number | null;

	/**
	* The upper bound of the return parameter, if present. This information is derived
	* from the return result for this Operation.
	*/
	getUpper(element: elements.Operation): elements.UnlimitedNatural | null;

	/**
	* Returns the ownedParameters with direction in and inout.
	*/
	getInputParameters(element: elements.Operation): elements.Parameter[];

	/**
	* The query lowerBound() returns the lower bound of the return parameter as an integer, which is the
	* integerValue of lowerValue, if this is given, and 1 otherwise. This information is derived from the
	* return result for this Operation.
	*/
	getLowerBound(element: elements.Operation): number;

	/**
	* Returns the ownedParameters with direction out, inout, or return.
	*/
	getOutputParameters(element: elements.Operation): elements.Parameter[];

	/**
	* Gets the operation's return parameter, if it has one.
	*/
	getReturnParameter(element: elements.Operation): elements.Parameter | null;

	/**
	* Gets the type of the operation's return parameter, if it has any.
	*/
	getReturnType(element: elements.Operation): elements.Type | null;

	/**
	* The query upperBound() returns the upper bound of the return parameter for a bounded multiplicity as
	* an unlimited natural, which is the unlimitedNaturalValue of upperValue, if given, and 1, otherwise.
	* This information is derived from the return result for this Operation.
	*/
	getUpperBound(element: elements.Operation): elements.UnlimitedNatural;

	/**
	* The query isMultivalued() checks whether the return parameter has an upper bound greater than one.
	*/
	isMultivalued(element: elements.Operation): boolean;

	/**
	* The query isOptional checks whether he return parameter has a lower bound of 0 (0..n).
	*/
	isOptional(element: elements.Operation): boolean;

	/**
	* The query isOptional checks whether he return parameter has a lower bound of 0 and an upper bound of
	* 1 (0..1).
	*/
	isOptionalAndSinglevalued(element: elements.Operation): boolean;

	/**
	* Gets the specializing Classifier in the Generalization relationship. This property is derived.
	*/
	getSpecific(element: elements.Generalization): elements.Classifier;

	/**
	* Gets the enumeration that owns this enumeration literal. This property is derived.
	*/
	getEnumeration(element: elements.EnumerationLiteral): elements.Enumeration;

	/**
	* Gets the value of the Specification property.
	*/
	getSpecificationValue(element: elements.EnumerationLiteral): any | null;

	/**
	* Returns an Element representing the element whose id property matches the specified string.
	*/
	findElementById(id: string): elements.Element | null;
}
