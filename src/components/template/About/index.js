import React, { Component } from "react";
import PropTypes from "prop-types";

import { Input } from '../../atoms/Input';
import { Title } from '../../atoms/Title';
import { Tooltip } from "../../atoms/Tooltip";

import { NumberField } from "../../molecules/NumberField";
import { SelectField } from '../../molecules/SelectField';
import TextareaField from "../../molecules/TextareaField";

import PaymentField from "../../organisms/PaymentField";

import { categories } from './categories';
import { Form, Header, InputContainer, InputBlock } from "./styles";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Form>
        <Header>
          <h4>About</h4>
        </Header>
        <InputContainer>
          <InputBlock>
            <Title desc="Title" />
            <Input
              id="title"
              type="text"
              placeholder="Make it short and clear"
              name="title"
            />
            <Tooltip text="Title cannot be empty" isVisible={true} />
          </InputBlock>
          <InputBlock>
            <Title desc="description" />
            <TextareaField
              maxlength="140"
              placeholder="Write about your event, be creative"
              desc="Max length 140 characters"
            />
            <Tooltip text="Title cannot be empty" isVisible={true} />
          </InputBlock>
          <InputBlock>
            <Title desc="category" />
            <SelectField
              categories={categories}
              id="category"
              name="category"
              desc="Describes topic and people who should be interest in this event"
            />
            <Tooltip text="Title cannot be empty" isVisible={true} />
          </InputBlock>
          <InputBlock>
            <Title desc="payment" />
            <PaymentField />
            <Tooltip text="Title cannot be empty" isVisible={true} />
          </InputBlock>
          <InputBlock>
            <Title desc="reward" />
            <NumberField
              id="reward"
              name="reward"
              placeholder="Number"
              min="0"
              max="10"
              desc="reward points for attendance"
            />
            <Tooltip text="Title cannot be empty" isVisible={true} />
          </InputBlock>
        </InputContainer>
      </Form>
    );
  }
}

export default About;


// class About extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       paidEvent: false
//     }
//   }
//   switchPayment = () => {
//     this.setState({
//       paidEvent: !this.state.paidEvent,
//     });
//   }
//   render() {
//     return (
//       <Form>
//         <Title>
//           <h4>About</h4>
//         </Title>
//         <InputContainer>
//           <InputBlock>
//             <Title desc="Title" />
//             <InputText
//               id="title"
//               type="text"
//               placeholder="Make it short and clear"
//               name="title"
//             />
//             <Tooltip text="Title cannot be empty" isVisible={true} />
//           </InputBlock>
//           <InputBlock>
//             <Title desc="description" />
//             <Textarea
//               maxlength="140"
//               placeholder="Write about your event, be creative"
//               desc="Max length 140 characters"
//             />
//             <Tooltip text="Title cannot be empty" isVisible={true} />
//           </InputBlock>
//           <InputBlock>
//             <Title desc="category" />
//             <InputText
//               id="category"
//               type="text"
//               placeholder="Select category (skills, interests, locations)"
//               name="category"
//               italic="Describes topic and people who should be interest in this event"
//             />
//             <Tooltip text="Title cannot be empty" isVisible={true} />
//           </InputBlock>
//           <InputBlock>
//             <Title desc="payment" />
//             <InputRadio
//               id="free-event"
//               name="freeEvent"
//               checked={!this.state.paidEvent}
//               desc="Free event"
//               onChange={this.switchPayment}
//             />
//             <InputRadio
//               id="paid-event"
//               name="paidEvent"
//               checked={this.state.paidEvent}
//               desc="Paid event"
//               onChange={this.switchPayment}
//             />
//             <InputNumber 
//               id="fee"
//               name="fee"
//               placeholder="Fee"
//               desc="$"
//             />
//             <Tooltip text="Title cannot be empty" isVisible={true} />
//           </InputBlock>
//           <InputBlock>
//             <Title desc="reward" />
//             <InputNumber
//               id="reward"
//               name="reward"
//               placeholder="Number"
//               min="0"
//               max="10"
//               desc="reward points for attendance"
//             />
//             <div>
//             <Tooltip text="Title cannot be empty" isVisible={true} />
//             </div>
//           </InputBlock>
//         </InputContainer>
//       </Form>
//     );
//   }
// }

// export default About;


// class About extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       paidEvent: false
//     }
//   }
//   switchPayment = () => {
//     this.setState({
//       paidEvent: !this.state.paidEvent,
//     });
//   }
//   render() {
//     return (
//       <Form>
//         <Header>
//           <h4>About</h4>
//         </Header>
//         <InputContainer>
//           <InputBlock>
//             <Title>
//               <Title desc="Title" />
//             </Title>
//             <Field>
//               <InputText
//                 id="title"
//                 name="title"
//                 type="text"
//                 placeholder="Make it short and clear"
//               />
//             </Field>
//             <Tooltip>
//               <Tooltip text="Title cannot be empty" isVisible={true} />
//             </Tooltip>
//           </InputBlock>
//           <InputBlock>
//             <Title>
//               <Title desc="description" />
//             </Title>
//             <Field>
//               <Textarea
//                 maxlength="140"
//                 placeholder="Write about your event, be creative"
//                 desc="Max length 140 characters"
//               />
//             </Field>
//             <Tooltip>
//               <Tooltip text="Title cannot be empty" isVisible={true} />
//             </Tooltip>
//           </InputBlock>
//           <InputBlock>
//             <Title>
//               <Title desc="category" />
//             </Title>
//             <Field>
//               <InputText
//                 id="category"
//                 type="text"
//                 placeholder="Select category (skills, interests, locations)"
//                 name="category"
//                 italic="Describes topic and people who should be interest in this event"
//               />
//             </Field>
//             <Tooltip>
//               <Tooltip text="Title cannot be empty" isVisible={true} />
//             </Tooltip>
//           </InputBlock>
//           <InputBlock>
//             <Title>
//               <Title desc="payment" />
//             </Title>
//             <Field>
//               <InputRadio
//                 id="free-event"
//                 name="freeEvent"
//                 checked={!this.state.paidEvent}
//                 desc="Free event"
//                 onChange={this.switchPayment}
//               />
//               <InputRadio
//                 id="paid-event"
//                 name="paidEvent"
//                 checked={this.state.paidEvent}
//                 desc="Paid event"
//                 onChange={this.switchPayment}
//               />
//               <InputNumber 
//                 id="fee"
//                 name="fee"
//                 placeholder="Fee"
//                 desc="$"
//               />
//             </Field>
//             <Tooltip>
//               <Tooltip text="Title cannot be empty" isVisible={true} />
//             </Tooltip>
//           </InputBlock>
//           <InputBlock>
//             <Title>
//               <Title desc="reward" />
//             </Title>
//             <Field>
//               <InputNumber
//                 id="reward"
//                 name="reward"
//                 placeholder="Number"
//                 min="0"
//                 max="10"
//                 desc="reward points for attendance"
//               />
//             </Field>
//             <Tooltip>
//               <Tooltip text="Title cannot be empty" isVisible={true} />
//             </Tooltip>
//           </InputBlock>
//         </InputContainer>
//       </Form>
//     );
//   }
// }

// export default About;