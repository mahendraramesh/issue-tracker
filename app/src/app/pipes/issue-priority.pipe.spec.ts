import { IssuePriorityPipe } from './issue-priority.pipe';

describe('IssuePriorityPipe', () => {
  it('create an instance', () => {
    const pipe = new IssuePriorityPipe();
    expect(pipe).toBeTruthy();
  });
});
