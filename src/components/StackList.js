import React, { Component } from 'react';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import {Link} from 'react-router-dom';
import { setStack, loadStacks } from '../actions';

export class StackList extends Component {
  componentDidMount() {
    if (this.props.stacks.length === 0) this.props.loadStacks(stacks);
  }

	render() {
		return (
			//use javascrip map method to render some JSX one stack at a time.
			<div>
				{
					this.props.stacks.map(stack => {
						//return some new JSX
						return (
							//insert stack.title in h4 element
							//use Unique IDs from each stack as their key
              <Link 
                to='/stack' 
                key={stack.id} 
                onClick={() => this.props.setStack(stack)}
              >
								<h4>{stack.title}</h4>
							</Link>
						)
					})
				}
			</div>
		)
	}
} 

function mapStateToProps(state) {
  return { stacks: state.stacks };
}

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);