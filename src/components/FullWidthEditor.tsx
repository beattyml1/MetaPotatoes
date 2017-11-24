import UI = require("UI");
import * as Controls from "./Controls";
import RadioSelect from 'ComplexControls/RadioSelect';
import CheckList from 'ComplexControls/CheckList';
import {FullWidthFieldLabelAndContainer} from 'components/LabeledFieldContainers/FullWidthFieldLabelAndContainer';
import {__, $$} from "../Extensions";
import React = require('react');
import {OptionItem, OptionsSource} from 'classes/OtherClasses'
import {autoPickHint, getType, isFullWidth, isInput} from 'Logic'
// import ReactDataGrid = require('react-data-grid');
/// <reference path="typings/react/react.d.ts" />

export class FullWidthFieldEditor extends React.Component<any, any> {
  render() { return (
      <FullWidthFieldLabelAndContainer {...this.props}>
        <FullWidthFieldInputForType {...this.props} />
      </FullWidthFieldLabelAndContainer>
  );}
}

export class FullWidthFieldInputForType extends React.Component<any, any> {
  render() {
    var type = this.props.type;
    return (
        type === "radio" ? <RadioSelect {...this.props} /> :
        type === "checklist" ? <CheckList {...this.props} /> :
        type === "multi-line-text" ? <Controls.MultiLineTextBox {...this.props} /> :
      <div></div>
    );}
}
