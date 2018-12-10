import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: [{
                value: 1,
                text: 'Atlanta'
            }, {
                value: 2,
                text: 'Berlin'
            }, {
                value: 3,
                text: 'Boston'
            }, {
                value: 4,
                text: 'Chicago'
            }, {
                value: 5,
                text: 'London'
            }, {
                value: 6,
                text: 'Los Angeles'
            }, {
                value: 7,
                text: 'New York'
            }, {
                value: 8,
                text: 'Paris'
            }, {
                value: 9,
                text: 'San Francisco'
            }],
            val: 1
        };
    }

    render() {
        return (
            <div className="App">
                <mobiscroll.Page>
                    <mobiscroll.Form theme="ios">
                        <mobiscroll.Input placeholder="text1"/>

                        <mobiscroll.Input placeholder="text2"/>

                        <mobiscroll.Input placeholder="text3"/>

                        <mobiscroll.Input placeholder="text4"/>

                        <mobiscroll.Input placeholder="text5"/>
                        <mobiscroll.FormGroup>
                            <mobiscroll.FormGroupTitle>Inside Mobiscroll Form</mobiscroll.FormGroupTitle>
                            <label>
                                Select
                                <mobiscroll.Select
                                    minWidth={200}
                                    value={this.state.value}
                                    data={this.state.items}
                                    filter={true}
                                    theme="ios"
                                >
                                </mobiscroll.Select>
                            </label>
                        </mobiscroll.FormGroup>
                    </mobiscroll.Form>
                    <mobiscroll.BottomNav theme="ios" type="bottom">
                        <mobiscroll.NavItem icon="newspaper">News</mobiscroll.NavItem>
                        <mobiscroll.NavItem icon="material-people" badge="1">People</mobiscroll.NavItem>
                        <mobiscroll.NavItem icon="bubble" badge="9">Messages</mobiscroll.NavItem>
                        <mobiscroll.NavItem icon="fa-globe">Notifications</mobiscroll.NavItem>
                        <mobiscroll.NavItem icon="camera">Your story</mobiscroll.NavItem>
                        <mobiscroll.NavItem icon="calendar">Events</mobiscroll.NavItem>
                        <mobiscroll.NavItem icon="line-settings">Preferences</mobiscroll.NavItem>
                    </mobiscroll.BottomNav>
                </mobiscroll.Page>
            </div>
        );
    }
}

export default App;
