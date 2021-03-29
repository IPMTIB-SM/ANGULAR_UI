import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTable'
})
export class SortTablePipe implements PipeTransform {

    transform(array: Array<any>): any {
      array.sort((a: any, b: any) => {
        console.log(a.deploymentStatus);
        if (a.deploymentStatus < b.deploymentStatus) {
          return -1;
        } else if (a.deploymentStatus > b.deploymentStatus) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
}
