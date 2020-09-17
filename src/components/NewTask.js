import React from 'react';
import './login.css';
import {  withStyles,
    TextField, 
    MenuItem, 
    FormControl, 
    Button, 
    InputLabel,
    Select} 
    from '@material-ui/core';
import { withRouter } from "react-router";


const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      link: {
        display: 'flex',
      },
      icon: {
        marginRight: theme.spacing(0.5),
        width: 25,
        height: 25,
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
});

export class NewTask extends React.Component {

    constructor(props){
        super(props);
        this.state = {description:'',name:'',email:'',estado:'',date:''};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEstadoChange = this.handleEstadoChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDescriptionChange(e){
        this.setState({
            description: e.target.value
        });
    };

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    };

    handleEmailChange(e){
        this.setState({
            email: e.target.value
        });
    };

    handleEstadoChange(e){
        this.setState({
            estado: e.target.value
        });
    };

    
    handleDateChange(){
        this.setState({
            date: new Date().getDate()+"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()
        });
    };

    handleSubmit(e){
        e.preventDefault();
        console.log("vamos a registrar");
        if(this.state.description !== "" && this.state.responsible !== "" && this.state.estado !=="" 
            && this.state.date !== ""){
                alert("datos correctos");
                alert(this.state);
                //this.props.card(this.state.description,this);
            
        }else{
            alert("datos incorrectos")
        }
    };

    render() { 
        const { classes } = this.props;
                
        return (
            <div className="fondo">
                 <div>
                    <form onSubmit={this.handleSubmit} className="form" >
                        <br></br>
                        <h2>Registrar</h2>
                        <br></br>
                        <div className="text">
                            <div>
                                <TextField  id="description" label="Description" placeholder="description"
                                    onChange={this.handleDescriptionChange} fullWidth autoFocus required />
                            </div>
                            <br></br>
                            <div>
                                <TextField  id="name" label="Name"  placeholder="name"
                                    onChange={this.handleNameChange} fullWidth autoFocus required />
                            </div>
                            <br></br>
                            <div >
                                <TextField id="email" label="Email" type="email" placeholder="email"
                                    onChange={this.handleEmailChange} fullWidth required />
                            </div >
                        </div>
                        <br></br>
                        <FormControl className={classes.formControl} >
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={this.handleEstadoChange}
                                fullWidth required
                                >
                            <MenuItem value={10}>Ready</MenuItem>
                            <MenuItem value={20}>Completed</MenuItem>
                            <MenuItem value={30}>In Progress</MenuItem>
                            </Select>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <Button type="submit" color="primary" variant="contained"  className="submit"
                                onChange={this.handleSubmit}>
                                Entrar    
                            </Button>
                        </div>
                        <br></br>
                        <br></br>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(NewTask));