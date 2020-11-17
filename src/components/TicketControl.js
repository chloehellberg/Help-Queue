import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import ExtraPages from './ExtraPages';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 0
      // formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      stepNumber: prevState.stepNumber+1
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.stepNumber === 0) {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    } else if(this.state.stepNumber === 1) {
      currentlyVisibleState = <ExtraPages message="Have you gone through all the steps on the Learn How to Program debugging lesson?" />;
      buttonText = "Yes, I have!"
    } else if (this.state.stepNumber === 2) {
      currentlyVisibleState = <ExtraPages message="Have you asked another pair for help?" />;
      buttonText = "Yep!"
    } else if (this.state.stepNumber === 3) {
      currentlyVisibleState = <ExtraPages message ="Have you spent 15 minutes going through through the problem documenting every step?" />;
      buttonText = "Uh-huh, I'd like to submit a ticket now..."
    } else  {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return To Ticket List";
      // this.setState({
      //   stepNumber: 0
      // });
    } 
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;





// import React from 'react';
// import NewTicketForm from './NewTicketForm';
// import TicketList from './TicketList';

// class TicketControl extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false
//     };
//   }

//   handleClick = () => {
//     this.setState(prevState => ({
//       formVisibleOnPage: !prevState.formVisibleOnPage
//     }));
//   }

//   render(){
//     let currentlyVisibleState = null;
//     let buttonText = null;
//     if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewTicketForm />;
//       buttonText = "Return To Ticket List";
//     } else {
//       currentlyVisibleState = <TicketList />
//       buttonText = "Add Ticket";
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </React.Fragment>
//     );
//   }

// }

// export default TicketControl;