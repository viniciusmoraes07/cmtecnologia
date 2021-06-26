import React,{Component} from 'react'
import Card2 from "./card"
import SimpleLineChart from"./chart"
import BarChart from "./barChart"
import axios from 'axios'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const api = axios.create({
    baseURL:'https://api.covid19api.com/total/dayone/country/south-africa/status/'
})



export default class Principal extends Component{

    state = {
        data :null,
        casos:null,
        recuperados:null,
        mortos:null,

        arrayConfirmado:[],
        arrayMortes:[],

        maxContagio:null,
        minContagio:null


    }

    async componentDidMount(){
        
        const response = await api.get('confirmed');

        const response2 = await api.get('recovered');

        const response3 = await api.get('deaths');

    

        
        this.setState({data:response.data[response.data.length-1].Date.substring(0,10),
                        casos:response.data[response.data.length-1].Cases,
                        recuperados:response2.data[response.data.length-1].Cases,
                        mortos:response3.data[response.data.length-1].Cases,
                        arrayConfirmado:response.data,
                        arrayMortes:response2.data})

        
    }

    render(){
        return(
            <div>
                <div style={{backgroundColor:"black" ,height:50,textAlign:'left'}}>

                   <a href="#" style={{color:'white',marginLeft:40,top:50,textDecoration:'none',verticalAlign:'middle'}}>Início</a>

                   <a href="#" style={{color:'white',marginLeft:30,marginTop:90,textDecoration:'none',verticalAlign:'middle'}}>Estatística</a>

                   <a href="#s" style={{color:'white',marginLeft:30,marginTop:90,textDecoration:'none',verticalAlign:'middle'}}>Saiba Mais</a>
                     
                   
                </div>

                <h2 style={{textAlign:'left',marginLeft:35,marginBottom:0}}>Central Covid-19 - South-Africa</h2>
                

                <div style={{display:'flex'}} className="principal">

                    
                    <div>
                        <Card2 

                            data = {this.state.data} 
                            casos = {this.state.casos} 
                            tipo  = "Confirmados"
                            texto = "Quantidade de pessoas que fizeram o exame e testaram positivo">

                        </Card2>

                        <Card2 

                            data = {this.state.data} 
                            casos = {this.state.recuperados} 
                            tipo  = "Recuperados"
                            texto = "Quantidade de pessoas que se recuperaram completamente da doença">

                        </Card2>
                        <Card2
                            data = {this.state.data} 
                            casos = {this.state.mortos} 
                            tipo  = "Mortes"
                            texto = "Quantidade de pessoas que morreram">
                        </Card2>
                    </div>

                    <div style={{marginTop:30}}>
                    
                        <Card style={{backgroundColor:'#C0C0C0'}}>
                            <CardContent>
                                <Typography color="textSecondary"> Comportamento do número de casos positivo para Covid-19</Typography>
                                <SimpleLineChart data = {this.state.arrayConfirmado}></SimpleLineChart>
                            </CardContent>
                        </Card>

                        <Card style={{marginTop:30,backgroundColor:'#C0C0C0'}}>
                            <CardContent>
                                <Typography color="textSecondary">Comportamento do número de mortes por Covid-19</Typography>
                                <SimpleLineChart data = {this.state.arrayMortes}></SimpleLineChart>
                            </CardContent>
                        </Card>
                    </div>

                    <div style={{marginTop:30,marginLeft:30}}>

                        <div style={{display:'flex'}}>

                            <Card style ={{width:200,backgroundColor:'#C0C0C0'}}>
                                <CardContent>
                                    <Typography  color="textSecondary" gutterBottom>
                                        % de recuperados
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {Math.round((this.state.recuperados/this.state.casos)*100)}%
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card style ={{marginLeft:30,width:200,backgroundColor:'#C0C0C0'}}>
                                <CardContent>
                                    <Typography  color="textSecondary" gutterBottom>
                                        % de mortes
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {Math.round((this.state.mortos/this.state.casos)*100)}%
                                    </Typography>
                                </CardContent>
                            </Card>

                        </div>
                        

                        <Card style = {{marginTop:30,backgroundColor:'#C0C0C0'}}>
                            <CardContent>
                                
                                <Typography  color="textSecondary" gutterBottom>
                                       Confir/Recupe e Confir/Mortos
                                </Typography>
                                <BarChart confirmados= {this.state.casos}
                                          mortos = {this.state.mortos} 
                                          recuperados = {this.state.recuperados}
                                          style = {{ paddingLeft:40}}>

                                </BarChart>
                            </CardContent>
                        </Card>
                        
                    </div>
                    
                </div>
            </div>
            
        )
    }
}