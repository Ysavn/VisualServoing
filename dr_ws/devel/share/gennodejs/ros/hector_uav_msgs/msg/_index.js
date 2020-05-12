
"use strict";

let HeightCommand = require('./HeightCommand.js');
let MotorCommand = require('./MotorCommand.js');
let Compass = require('./Compass.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let MotorPWM = require('./MotorPWM.js');
let HeadingCommand = require('./HeadingCommand.js');
let RuddersCommand = require('./RuddersCommand.js');
let RC = require('./RC.js');
let Supply = require('./Supply.js');
let YawrateCommand = require('./YawrateCommand.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let ServoCommand = require('./ServoCommand.js');
let ControllerState = require('./ControllerState.js');
let RawMagnetic = require('./RawMagnetic.js');
let ThrustCommand = require('./ThrustCommand.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let RawImu = require('./RawImu.js');
let MotorStatus = require('./MotorStatus.js');
let Altimeter = require('./Altimeter.js');
let RawRC = require('./RawRC.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let LandingActionResult = require('./LandingActionResult.js');
let LandingFeedback = require('./LandingFeedback.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let PoseFeedback = require('./PoseFeedback.js');
let PoseGoal = require('./PoseGoal.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let LandingResult = require('./LandingResult.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let PoseActionResult = require('./PoseActionResult.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');
let LandingAction = require('./LandingAction.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let TakeoffAction = require('./TakeoffAction.js');
let PoseResult = require('./PoseResult.js');
let PoseAction = require('./PoseAction.js');
let TakeoffResult = require('./TakeoffResult.js');
let TakeoffGoal = require('./TakeoffGoal.js');
let LandingGoal = require('./LandingGoal.js');
let LandingActionGoal = require('./LandingActionGoal.js');

module.exports = {
  HeightCommand: HeightCommand,
  MotorCommand: MotorCommand,
  Compass: Compass,
  PositionXYCommand: PositionXYCommand,
  MotorPWM: MotorPWM,
  HeadingCommand: HeadingCommand,
  RuddersCommand: RuddersCommand,
  RC: RC,
  Supply: Supply,
  YawrateCommand: YawrateCommand,
  VelocityXYCommand: VelocityXYCommand,
  ServoCommand: ServoCommand,
  ControllerState: ControllerState,
  RawMagnetic: RawMagnetic,
  ThrustCommand: ThrustCommand,
  VelocityZCommand: VelocityZCommand,
  RawImu: RawImu,
  MotorStatus: MotorStatus,
  Altimeter: Altimeter,
  RawRC: RawRC,
  AttitudeCommand: AttitudeCommand,
  LandingActionResult: LandingActionResult,
  LandingFeedback: LandingFeedback,
  TakeoffActionGoal: TakeoffActionGoal,
  TakeoffActionFeedback: TakeoffActionFeedback,
  PoseFeedback: PoseFeedback,
  PoseGoal: PoseGoal,
  PoseActionGoal: PoseActionGoal,
  LandingResult: LandingResult,
  TakeoffFeedback: TakeoffFeedback,
  TakeoffActionResult: TakeoffActionResult,
  PoseActionResult: PoseActionResult,
  LandingActionFeedback: LandingActionFeedback,
  LandingAction: LandingAction,
  PoseActionFeedback: PoseActionFeedback,
  TakeoffAction: TakeoffAction,
  PoseResult: PoseResult,
  PoseAction: PoseAction,
  TakeoffResult: TakeoffResult,
  TakeoffGoal: TakeoffGoal,
  LandingGoal: LandingGoal,
  LandingActionGoal: LandingActionGoal,
};
