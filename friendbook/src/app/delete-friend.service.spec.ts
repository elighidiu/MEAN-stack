import { TestBed } from '@angular/core/testing';

import { DeleteFriendService } from './delete-friend.service';

describe('DeleteFriendService', () => {
  let service: DeleteFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
