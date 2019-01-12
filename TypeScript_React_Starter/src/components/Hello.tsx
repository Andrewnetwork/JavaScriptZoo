/**
 * Hello.tsx 
 * January 2019
 * 
 * Props 
 * - name
 * - enthusiasmLevel
 */

import * as React from 'react';
import './style/Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export interface State {
    currentEnthusiasm: number;
}

export default class Hello extends React.Component<Props, State>{
    render() {
        let name = this.props.name;
        let enthusiasmLevel = this.props.enthusiasmLevel === undefined ? 1 : this.props.enthusiasmLevel

        if(enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        
        return (
            <div className="hello">
                <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onIncrement}>+</button>
            </div>
        );
    }

    updateEnthusiasm(currentEnthusiasm:number){
        this.setState({ currentEnthusiasm });
        console.log("Updating..");
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}


