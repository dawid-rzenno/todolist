import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageStatisticsTableComponent } from './usage-statistics-table.component';

describe('MostActiveUsersTableComponent', () => {
  let component: UsageStatisticsTableComponent;
  let fixture: ComponentFixture<UsageStatisticsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsageStatisticsTableComponent]
    });
    fixture = TestBed.createComponent(UsageStatisticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
