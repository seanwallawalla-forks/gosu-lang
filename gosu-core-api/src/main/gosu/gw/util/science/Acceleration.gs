package gw.util.science

uses gw.util.Rational
uses java.math.RoundingMode
uses java.math.MathContext

final class Acceleration extends AbstractMeasure<AccelerationUnit, Acceleration> {
  construct( value : Rational, unit: AccelerationUnit, displayUnit: AccelerationUnit ) {
    super( value, unit, displayUnit, AccelerationUnit.BASE )
  }
  construct( value: Rational, unit: AccelerationUnit ) {
    this( value, unit, unit )
  }
     
  function multiply( mass: Mass ) : Force {
    return new Force( toNumber() * mass.toNumber(), ForceUnit.BASE, ForceUnit.get( mass.Unit, Unit ) )
  }

  function multiply( time: Time ) : Velocity {
    return new Velocity( toNumber() * time.toNumber(), VelocityUnit.BASE, Unit.VelocityUnit )
  }
}