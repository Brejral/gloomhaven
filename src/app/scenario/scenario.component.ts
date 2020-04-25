import { Component, OnInit } from "@angular/core";
import { AttackCard } from "../shared/models";
import { standardAttackDeck } from "~/app/shared/data";
import { shuffle } from "../shared/helpers";

@Component({
    selector: "Scenario",
    templateUrl: "./scenario.component.html",
    styleUrls: ["./scenario.component.scss"],
})
export class ScenarioComponent implements OnInit {
    public deck: AttackCard[] = [];
    public discardPile: AttackCard[] = [];

    constructor() {
        // Use the constructor to inject services.
    }

    public ngOnInit(): void {
        this.deck = shuffle(standardAttackDeck);
    }

    public drawCard(): void {
        console.log(
            "drawCard: ",
            this.deck.length,
            this.discardPile.length,
            this.discardPile.length && this.discardPile[0].shuffle
        );
        if (this.discardPile.length && this.discardPile[0].shuffle) {
            this.deck = shuffle([...this.deck, ...this.discardPile]);
            this.discardPile = [];
        }
        this.discardPile = [this.deck.pop(), ...this.discardPile];
    }
}
