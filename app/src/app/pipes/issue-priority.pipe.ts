import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'issuePriority'
})
export class IssuePriorityPipe implements PipeTransform {
  transform(priority: string): string {
    return priority == "Major" ? priority.toUpperCase() : priority;
    
  }
}
