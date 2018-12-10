import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <mobiscroll.Page>
                    <mobiscroll.Form>
                        <mobiscroll.Input placeholder="text1"/>

                        <mobiscroll.Input placeholder="text2"/>

                        <mobiscroll.Input placeholder="text3"/>

                        <mobiscroll.Input placeholder="text4"/>

                        <mobiscroll.Input placeholder="text5"/>
                    </mobiscroll.Form>
                    <mobiscroll.BottomNav theme="ios" type="bottom" >
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
