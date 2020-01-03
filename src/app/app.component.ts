import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {
  PageSettingsModel,
  SortSettingsModel,
  SelectionSettingsModel,
  TreeGridComponent
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Object[];
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;
  public selectionOptions: SelectionSettingsModel;

  @ViewChild('treegrid', { static: false })
  public treegrid: TreeGridComponent;

  ngOnInit(): void {
    this.data = sampleData;
    this.sortSettings = {
      columns: [
        { field: 'taskName', direction: 'Ascending' },
        { field: 'taskID', direction: 'Descending' }
      ]
    };
    this.pageSettings = { pageSize: 12 };
    this.selectionOptions = {
      type: 'Multiple',
      mode: 'Both',
      cellSelectionMode: 'Flow',
      checkboxMode: 'ResetOnRowClick',
      persistSelection: true
    };
  }

  onClicked(): void {
    //this.treegrid.selectCell({ rowIndex: 2, cellIndex: 3 });
    //this.treegrid.selectRow(3);
    let rows: number[] = [2, 3, 4, 6];
    //this.treegrid.selectRows(rows);
    //this.treegrid.selectCheckboxes(rows);
    this.treegrid.clearSelection();
  }
}
