import { Component } from 'react';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = evt => {
    this.setState(prevState => {
      return { [evt.target.name]: prevState[evt.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
      const feedbackPercentage = Math.round(
        this.state.good / (this.countTotalFeedback() / 100)
      );
      return feedbackPercentage;
    }
    return 0;
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={Object.keys(this.state)}
            addFeedback={this.addFeedback}
          />
        </Section>
        <GlobalStyle />
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              feedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}