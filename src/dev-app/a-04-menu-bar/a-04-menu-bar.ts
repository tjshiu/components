import {Component, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {Menu, MenuBar, MenuItem} from '@angular/aria/menu';

/** Menu bar example. */
@Component({
  selector: 'a-04-menu-bar',
  templateUrl: 'a-04-menu-bar.html',
  styleUrl: './a-04-menu-bar.css',
  imports: [Menu, MenuBar, MenuItem, OverlayModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class A04MenuBarDemo {}
