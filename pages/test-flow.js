import BasePrompt from "../lib/components/modules/base-prompt";
import Heading from "../lib/components/heading";
import LikertChoice from "../lib/components/likert-choice";
import ModuleFlow from "../lib/components/modules/module-flow";
import MultipleChoice from "../lib/components/multiple-choice";
import Paragraph from "../lib/components/paragraph";
import RichEditor from "../lib/components/rich-editor";
import TwoUpPrompt from "../lib/components/modules/two-up-prompt";
import sharedStyles from "../lib/styles";
import { signIn } from "../lib/auth";
import { loadData, saveData } from "../lib/db";

// TODO(andy): Next up, keep moving the data management outwards.
// TODO(andy): Extract flow and cohort constants.

export default class TestFlow extends React.Component {
  static async getInitialProps() {
    const userID = await signIn();
    const data = await loadData("test", "default", userID);
    return { userID, data };
  }

  constructor(props) {
    super(props);
    // TODO(andy): Find a way to not require the encoding of the number of modules here.
    this.state = { data: props.data || [{}, {}] };
  }

  onChange = (index, newData) => {
    const { data } = this.state;
    this.setState({
      data: [...data.slice(0, index), newData, ...data.slice(index + 1)],
    });

    saveData("test", "default", this.props.userID, index, newData);
  };

  render() {
    return (
      <ModuleFlow>
        <TwoUpPrompt
          data={this.state.data[0] || {}}
          onChange={newData => this.onChange(0, newData)}
          referenceComponent={
            <div>
              <p>
                Fugiat sunt elit elit minim adipisicing. Laborum qui nulla elit cupidatat ea enim exercitation elit duis incididunt elit minim. Esse cillum esse id fugiat ullamco exercitation proident fugiat magna excepteur. Fugiat proident aliqua aliquip ea voluptate in qui fugiat nostrud eiusmod nulla enim. Incididunt voluptate pariatur duis mollit ipsum. Velit irure cillum dolore laborum ullamco adipisicing ut ea eu dolor ullamco culpa. Commodo fugiat labore proident sunt id fugiat consectetur aute eiusmod officia minim.
              </p>
              <p>
                Fugiat sunt elit elit minim adipisicing. Laborum qui nulla elit cupidatat ea enim exercitation elit duis incididunt elit minim. Esse cillum esse id fugiat ullamco exercitation proident fugiat magna excepteur. Fugiat proident aliqua aliquip ea voluptate in qui fugiat nostrud eiusmod nulla enim. Incididunt voluptate pariatur duis mollit ipsum. Velit irure cillum dolore laborum ullamco adipisicing ut ea eu dolor ullamco culpa. Commodo fugiat labore proident sunt id fugiat consectetur aute eiusmod officia minim.
              </p>
              <p>
                Fugiat sunt elit elit minim adipisicing. Laborum qui nulla elit cupidatat ea enim exercitation elit duis incididunt elit minim. Esse cillum esse id fugiat ullamco exercitation proident fugiat magna excepteur. Fugiat proident aliqua aliquip ea voluptate in qui fugiat nostrud eiusmod nulla enim. Incididunt voluptate pariatur duis mollit ipsum. Velit irure cillum dolore laborum ullamco adipisicing ut ea eu dolor ullamco culpa. Commodo fugiat labore proident sunt id fugiat consectetur aute eiusmod officia minim.
              </p>
              <p>
                Fugiat sunt elit elit minim adipisicing. Laborum qui nulla elit cupidatat ea enim exercitation elit duis incididunt elit minim. Esse cillum esse id fugiat ullamco exercitation proident fugiat magna excepteur. Fugiat proident aliqua aliquip ea voluptate in qui fugiat nostrud eiusmod nulla enim. Incididunt voluptate pariatur duis mollit ipsum. Velit irure cillum dolore laborum ullamco adipisicing ut ea eu dolor ullamco culpa. Commodo fugiat labore proident sunt id fugiat consectetur aute eiusmod officia minim.
              </p>
            </div>
          }
        >
          <Heading text="Testing 1, 2, 3!" />
          <Paragraph text="What _what_ $x^2 + 30 = 100$" />
          <LikertChoice
            dataKey="dogChoice"
            leftLabel="not dog"
            rightLabel="very dog"
          />
        </TwoUpPrompt>

        <BasePrompt
          data={this.state.data[1] || {}}
          onChange={newData => this.onChange(1, newData)}
        >
          <Heading text="Testing 1, 2, 3--the second!" />
          <Paragraph
            text={
              `Your answer to the Likert prompt was: ${this.state.data[0].dogChoice}`
            }
          />
          <MultipleChoice
            dataKey="choice"
            choices={[
              "This is a choice",
              "And this is another choice",
              "But this is actually a bee",
            ]}
          />
          <RichEditor dataKey="response" />
        </BasePrompt>
      </ModuleFlow>
    );
  }
}
