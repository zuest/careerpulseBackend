import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';

declare var fs: any;


export interface UserData {
  selectedEvent: string;
  title: string;
  content: string;
  date: string;

}

@Component({
  selector: 'app-crud-compnonent-page',
  templateUrl: './crud-compnonent-page.component.html',
  styleUrls: ['./crud-compnonent-page.component.scss']
})
export class CrudCompnonentPageComponent implements OnInit {
  buttonAr = 'Arabic';
  displayedColumns: string[] = ['title', 'content', 'Date', 'Event type', 'actionsDelete'];
  dataSource: MatTableDataSource<UserData>;
  TableData: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    this.TableData = JSON.parse(fs.readFileSync('careerEn.json', 'utf8'));
    this.dataSource = new MatTableDataSource(this.TableData);
  }
  DeleteRow(row) {
    this.TableData.splice(row.id, 1);
    this.dataSource = new MatTableDataSource(this.TableData);
    fs.writeFileSync('careerEn.json', JSON.stringify(this.TableData));
    const TempArabicData = JSON.parse(fs.readFileSync('careerAr.json', 'utf8'));
    TempArabicData.splice(row.id, 1);
    fs.writeFileSync('careerAr.json', JSON.stringify(TempArabicData));
  }


  openDialog(row): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        RowData: row
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toArabic() {
    if (this.buttonAr === 'Arabic') {
      this.buttonAr = 'English';
      console.log(JSON.parse(fs.readFileSync('careerAr.json', 'utf8')).length);
      this.dataSource = new MatTableDataSource(JSON.parse(fs.readFileSync('careerAr.json', 'utf8')));
  } else {
      this.buttonAr = 'Arabic';
      this.dataSource = new MatTableDataSource(JSON.parse(fs.readFileSync('careerEn.json', 'utf8')));
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */

