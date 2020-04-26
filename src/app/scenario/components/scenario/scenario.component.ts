import { Component, OnInit } from '@angular/core';
import { Scenario } from '../../../shared/models';
import { scenarios } from '../../../shared/data';
import { ActivatedRoute } from '@angular/router';
import { MonsterType } from '~/app/shared/enums';

@Component({
    selector: 'Scenario',
    templateUrl: './scenario.component.html',
    styleUrls: ['./scenario.component.scss'],
})
export class ScenarioComponent implements OnInit {
    public scenario: Scenario;
    private id: number;

    constructor(private router: ActivatedRoute) {
        // Use the constructor to inject services.
    }

    public ngOnInit(): void {
        this.id = this.router.snapshot.params.id;
        this.scenario = scenarios[this.id - 1];
    }

    public getImage(monster: MonsterType): string {
        return `~/images/monsters/${monster
            .replace(/ /g, '-')
            .toLowerCase()}.jpg`;
    }
}
