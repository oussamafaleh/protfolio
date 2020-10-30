import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkDetailComponent } from './work-detail/work-detail.component';

import { locale as english } from './i18n/en';
import { locale as frensh } from './i18n/fr';
import { FuseTranslationLoaderService } from 'src/app/services/translation-loader.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  color : String = "#2c98f066"
  data = [
    {
    name : "Web development",
    projects: [
      {
        name: 'TAXIORA',
        gardImg : "../../assets/doc/dev/taxiora/taxiora6.png",
        img: [
          '../../../assets/doc/dev/taxiora/taxiora2.png',  
          '../../../assets/doc/dev/taxiora/taxiora4.png',  
          '../../../assets/doc/dev/taxiora/taxiora6.png',
          '../../../assets/doc/dev/taxiora/taxiora1.png',            
          '../../../assets/doc/dev/taxiora/taxiora3.png',  
          '../../../assets/doc/dev/taxiora/taxiora5.png',  
          '../../../assets/doc/dev/taxiora/taxiora.png',
        ],
        technologies:[
          {
            logo :'../../../assets/doc/logo/angular.png',
            name:'Angular'
          },
          {
            logo :'../../../assets/doc/logo/symfony.png',
            name:'Symfony'
          },
          {
            logo :'../../../assets/doc/logo/postgres.png',
            name:'Postgresql'
          },
          {
            logo :'../../../assets/doc/logo/docker.png',
            name:'Docker'
          }
        ],
        description : "tab-taxi is an IOT solution to help taxi owner manage their multiple taxis in term ofreservation, invoicing, tracking , driver allso tab-taxi provides a smart reservation redirection to driver and all races details . The system is composed by a mileage calculation sub-system , thermal printer , android tablete"
        
      },
      {
        name: 'ENISo IOTChallenge Web Site',
        gardImg : "../../assets/doc/dev/iot/eiot.png",
        img: [
          '../../../assets/doc/dev/iot/eiot.png',
          '../../../assets/doc/dev/iot/Eiotc2.png',  
          '../../../assets/doc/dev/iot/Eiotc.jpg',  
          '../../../assets/doc/dev/iot/eiotc.png'
        ],
        technologies:[
          {
            logo :'../../../assets/doc/logo/angular.png',
            name:'Angular'
          },
          {
            logo :'../../../assets/doc/logo/symfony.png',
            name:'Symfony'
          },
          {
            logo :'../../../assets/doc/logo/postgres.png',
            name:'Postgresql'
          },
          {
            logo :'../../../assets/doc/logo/ngxs.png',
            name:'NGXS'
          }
        ],
        description : "tab-taxi is an IOT solution to help taxi owner manage their multiple taxis in term ofreservation, invoicing, tracking , driver allso tab-taxi provides a smart reservation redirection to driver and all races details . The system is composed by a mileage calculation sub-system , thermal printer , android tablete"
        
      },
      
    ],
  },
  {
    name : "DevOps",
    projects:  [
      {
        name: 'BUD-BOOT',
        gardImg : "../../assets/doc/devops/budboot/presentation.jpg",
        img: [
          '../../../assets/doc/devops/budboot/presentation.jpg',  
          '../../../assets/doc/devops/budboot/Amazon-ECS-metrics.png',  
          '../../../assets/doc/devops/budboot/eureka.png',
          '../../../assets/doc/devops/budboot/postman-routes.png',            
          '../../../assets/doc/devops/budboot/aws-cluster.png',  
          '../../../assets/doc/devops/budboot/postman-auth.png',  
          '../../../assets/doc/devops/budboot/travis-logs.png'
        ],
        technologies:[
          {
            logo :'../../../assets/doc/logo/spring.png',
            name:'Spring(boot/cloud/security)'
          },
          {
            logo :'../../../assets/doc/logo/redis.png',
            name:'redis'
          },
          {
            logo :'../../../assets/doc/logo/docker.png',
            name:'Docker'
          },
          {
            logo :'../../../assets/doc/logo/travis.png',
            name:'Travis ci'
          },
          {
            logo :'../../../assets/doc/logo/aws.jpeg',
            name:'AWS Elastic Container'
          },
          {
            logo :'../../../assets/doc/logo/kafka.png',
            name:'Apache Kafka'
          },
          {
            logo :'../../../assets/doc/logo/kubernetes.png',
            name:'kubernetes'
          },
        ],
        description : "Bud Boot is an Auto generating code jar file for building microservice Based Extensible Web Application. with several reusable common tools like authentification ,mailing , CI/CD , adminstration dashboard , auto-generating custom microservices ."
        
      }
    ]
  },
  {
    name : "Machine Learning",
    projects:  [
      {
        name: 'Children Mental Health Prediction',
        gardImg : "../../assets/doc/machine-learning/mentalhealth-prediction/JupyterLab1.png",
        img: [
          '../../../assets/doc/machine-learning/mentalhealth-prediction/JupyterLab1.png',  
          '../../../assets/doc/machine-learning/mentalhealth-prediction/JupyterLab3.png',  
          '../../../assets/doc/machine-learning/mentalhealth-prediction/JupyterLab5.png',
          '../../../assets/doc/machine-learning/mentalhealth-prediction/JupyterLab2.png',
          '../../../assets/doc/machine-learning/mentalhealth-prediction/JupyterLab4.png',
          '../../../assets/doc/machine-learning/mentalhealth-prediction/JupyterLab6.png'
        ],
        technologies:[
          {
            logo :'../../../assets/doc/logo/travaux.png',
            name:"the project is in progress , please wait for more details"
          }
        ],
        description : "IT's a IT  Solution developed in the mental health domain to predict the mental health problem at an earlier stage using machine learning techniques"
        
      }
    ]
  },
]
  constructor(public dialog: MatDialog,
    private translationLoader: FuseTranslationLoaderService) {
      this.translationLoader.loadTranslations(english, frensh);
     }

  ngOnInit() {
  }
  openDialog(p) {
    const dialogRef = this.dialog.open(WorkDetailComponent, {
      data: p
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}
