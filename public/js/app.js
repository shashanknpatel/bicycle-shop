class TimersDashboard extends React.Component {
    state= {
        timers: [
            {
                image: '../images/products/ramen.jpg',
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid.v4(),
                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                image: '../images/products/eggsandwich.jpg',
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                runningSince: null,
            },
        ],
    };

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };

    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    };

    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    };

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    };

    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId),
        });
    };

    startTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {
                        runningSince: now,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    stopTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    render() {
        return(
            <div className="ui one column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                    />
                    <ToggleableTimerForm
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        );
    }
}

class ToggleableTimerForm extends React.Component {
    state = {
        isOpen: false,
    };

    handleFormOpen= () => {
        this.setState({ isOpen:true });
    };

    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    };
    
    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        }
        else {
            return(
                <div className="ui basic content center aligned segment">
                    <button 
                        className="ui basic button icon"
                        onClick={this.handleFormOpen}
                    >
                        <i className="plus teal icon" />
                    </button>
                </div>
            );
        }
    }
}

class EditableTimerList extends React.Component {
    render() {
        const timers= this.props.timers.map((timer) =>(
            <EditableTimer
                key={timer.id}
                id={timer.id}
                image={timer.image}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
            />
        ));
        return(
            <div id="timers">
                {timers}
            </div>
        );
    }
}

class EditableTimer extends React.Component {
    state = {
        editFormOpen: false,
    };

    handleEditClick = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };

    closeForm = () => {
        this.setState({ editFormOpen: false });
    };

    openForm = () => {
        this.setState({ editFormOpen: true });
    };

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        }
        else {
            return(
                <Timer
                    id={this.props.id}
                    image={this.props.image}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                />
            );
        }
    }
}

class TimerForm extends React.Component {
    state = {
        image: this.props.image || '',
        title: this.props.title || '',
        project: this.props.project || '',
    };
    
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleProjectChange = (e) => {
        this.setState({ project: e.target.value });
    };

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            image: this.state.image,
            title: this.state.title,
            project: this.state.project,
        });
    };

    render() {
        const submitText = this.props.id? 'Update' : 'Create';
        return(
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Image</label>
                            <input 
                                type='file'
                                value={this.state.image}
                            />
                        </div>
                        <div className="field">
                            <label>Title</label>
                            <input 
                                type='text' 
                                value={this.props.title} 
                                onChange={this.handleTitleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input 
                                type='text' 
                                value={this.props.project} 
                                onChange={this.handleProjectChange}
                            />
                        </div>
                    </div>
                </div>
                        <div className="ui two bottom attached buttons">
                            <div 
                                className="ui teal button"
                                onClick={this.handleSubmit}
                            >
                                {submitText}
                            </div>
                            <div 
                                className="ui black button"
                                onClick={this.props.onFormClose}
                            >
                                Cancel
                            </div>
                        </div>
            </div>
        );
    }
}

class Timer extends React.Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    };

    handleStopClick = () => {
        this.props.onStopClick(this.props.id)
    };

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    render() {
        const elapsedString = helpers.renderElapsedString(
            this.props.elapsed, this.props.runningSince
            );
        return(
            <div className="ui centered card">
                <div className="image">
                    <img src={this.props.image} />
                </div>
                <div className="content">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="meta">
                        {this.props.project}
                    </div>
                    <div className="center aligned description">
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className="extra content">
                        <span 
                            className="right floated edit icon"
                            onClick={this.props.onEditClick}
                        >
                            <i className="big edit icon"/>
                        </span>
                        <span 
                            className="right floated trash icon"
                            onClick={this.handleTrashClick}
                        >
                            <i className="big trash icon"/>
                        </span>
                    </div>
                </div>
                <div>
                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
                </div>
            </div>
        );
    }
}

class TimerActionButton extends React.Component {
    render() {
        if (this.props.timerIsRunning) {
            return (
                <div
                    className="ui bottom attached black button"
                    onClick={this.props.onStopClick}
                >
                    Stop
                </div>
            );
        } else {
            return (
                <div
                    className="ui bottom attached teal button"
                    onClick={this.props.onStartClick}
                >
                    Start
                </div>
            );
        }
    }
}

ReactDOM.render(<TimersDashboard/>,document.getElementById('content'));