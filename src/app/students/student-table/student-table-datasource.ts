import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import Student from 'src/app/entity/student';



// TODO: replace this with real data from your application
const EXAMPLE_DATA: Student[] = []
/**
 * Data source for the StudentTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StudentTableDataSource extends DataSource<Student> {
  data: Student[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  filter$: BehaviorSubject<string>;
  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Student[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
      this.filter$.asObservable()
    ];
    // Set the paginators length
    this.paginator.length = this.data.length;
    return merge(...dataMutations).pipe(map(() => {
      return this.getFilter(this.getPagedData(this.getSortedData([...this.data])));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Student[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Student[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'surname': return compare(a.surname, b.surname, isAsc);
        default: return 0;
      }
    });
  }
  // load data from the user
  private getFilter(data: Student[]): Student[] {
    const filter = this.filter$.getValue();
    if (filter === '') {
      return data;
    }
    return data.filter((student) => {
      return (student.name.toLowerCase().includes(filter) || student.surname.toLowerCase().includes(filter));
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
