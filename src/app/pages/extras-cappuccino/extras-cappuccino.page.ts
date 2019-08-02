import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

 
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
 
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-extras-cappuccino',
  templateUrl: './extras-cappuccino.page.html',
  styleUrls: ['./extras-cappuccino.page.scss'],
})
export class ExtrasCappuccinoPage implements OnInit {
  letterObj = {
    to: '',
    from: '',
    text: ''
  }
 
  pdfObj = null;


  name:string;
  surname:string;

  price=25;
  itemName="Cappuccino";
  increment=1;
  size="Cup";
  Milk="No";
  Sugar="No";
  Syrup="No";

  sizeA;
  MilkA;
  SugarA;
  SyrupA;

  total;
  
  page1=true;
  page2=false;

  optionSize=false;
  optionMilk=false;
  optionSugar=false;
  optionSyrup=false;

  today :any = new Date() ;
  number;

  Date: any =new Date().toLocaleDateString("en-IE", { year: "numeric", month: "long", day: "numeric" , hour: "numeric", minute: "numeric"});
  constructor(private alertCtrl: AlertController , private routeA: ActivatedRoute, public navCtrl: NavController, private plt: Platform, private file: File, private fileOpener: FileOpener) { }

  ngOnInit() {
    this.routeA.queryParams
    .subscribe(params => {
      this.name = params.name;
      this.surname = params.surname;
    
    });
  }

  add(){
    if(this.increment>=1){
      this.increment+=1;
   
    }
    if(this.increment >= 6){
      const alert = this.alertCtrl.create({
        message: 'You can not order more than six',
        subHeader: 'Limit Exceeded',
        buttons: ['Ok']}).then(
        alert=> alert.present()
      );
      this.increment=6;
    }
  }

  minus(){
    if(this.increment>=2){
      this.increment-=1;
    }
  }

  Order(){
    const  alert = this.alertCtrl.create({
      message: 'Total R ' + this.price*this.increment,
      subHeader: 'Oder Summary',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
           
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.total=this.price*this.increment;
            this.number=Math.floor(Math.random() * (1000000000 - 40000000 + 1)) + 4000000;
            
              this.optionSize=true;
              this.sizeA= this.size;
        
              this.optionMilk=true;
              this.MilkA= this.Milk;
    
              this.optionSugar=true;
              this.SugarA= this.Sugar;

              this.optionSyrup=true;
              this.SyrupA= this.Syrup;
            
            this.page1=false;
            this.page2=true;
        
            console.log(this.name);
            console.log(this.surname)
          }
        }
      ]
    }).then(
      alert=> alert.present()
    );
    
  }


  createPdf() {
    var docDefinition = {
      content: [
        { text: 'INVOICE', style: 'header'},
        { text: this.Date, alignment: 'right'},
        { text: "Ref "+this.number, alignment: 'right'},

        { text: 'From', style: 'subheader'},
        "Coffee App",
           

        { text: 'To', style: 'subheader'},
         this.name + " " +this.surname, 

        { text: 'Items', style: 'subheader'},
        {
            style: 'itemsTable',
            table: {
                widths: ['*','*'],
                body: [
                    [ 
                        { text: this.itemName, style: 'itemsTableHeader' },
                        { text: "R" + this.price , style: 'itemsTableHeader' },
                    ],
                    [
                      { text: "Size" },
                      { text: this.sizeA },
                    ],
                    [
                      { text: "Milk" },
                      { text: this.MilkA },
                    ],
                    [
                      { text: "Sugar" },
                      { text: this.SugarA },
                    ],
                    [
                      { text: "Syrup" },
                      { text: this.SyrupA },
                    ]
                    
                ]
            }
        },
        {
            style: 'totalsTable',
            table: {
                widths: ['*', 75, 75],
                body: [
                    [
                        '',
                        'Subtotal',
                        this.increment + " * R"+this.price + ".00",
                    ],
                    [
                        '',
                        'Total',
                        "R"+this.total + ".00",
                    ]
                ]
            },
            layout: 'noBorders'
        },
    ],
    styles: {
        header: {
            fontSize: 20,
            bold: true,
            margin: [0, 0, 0, 10],
            alignment: 'right'
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 20, 0, 5]
        },
        itemsTable: {
            margin: [0, 5, 0, 15]
        },
        itemsTableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        },
        totalsTable: {
            bold: true,
            margin: [0, 30, 0, 0]
        }
    },
    defaultStyle: {
    }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.downloadPdf();
  }
  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

  
}
