import { macros } from "../data/macros.data";

export function expandMacro(macro) {
    const key: string = macro.toLowerCase();
    if (key in macros) {
        return macros[key];
    } else {
        return macro;
    }
}

export function expandStat(s, stat, value) {
    let re = new RegExp("%" + stat + "% (\\+|-)(\\d*)", "g");
    const lineParsed = re.exec(s);

    const hasEliteValue = value.length === 2;
    let normalAttack = value[0];
    // Check in case of bosses with text in the attack (C+1)
    re = new RegExp("(\\d*)(\\+|-)?([a-zA-Z]+)", "i");
    let extraTextForParticularBosses = "";
    const valueParsed = re.exec(String(normalAttack));
    if (valueParsed && valueParsed[3]) {
        const symbol = valueParsed[2] === "-" ? "-" : "+";
        extraTextForParticularBosses = valueParsed[3] + symbol;
        normalAttack = valueParsed[1] !== "" ? parseInt(valueParsed[1], 10) : 0;
    }

    if (lineParsed) {
        if (lineParsed[1] === "+") {
            const valueNormal = normalAttack + parseInt(lineParsed[2], 10);
            if (hasEliteValue) {
                const valueElite = value[1] + parseInt(lineParsed[2], 10);
                return (
                    "%" +
                    stat +
                    "% " +
                    valueNormal +
                    " / <span class='elite-color'>" +
                    valueElite +
                    "</span>"
                );
            } else {
                return (
                    "%" +
                    stat +
                    "% " +
                    extraTextForParticularBosses +
                    valueNormal
                );
            }
        } else if (lineParsed[1] === "-") {
            const valueNormal = normalAttack - parseInt(lineParsed[2], 10);
            if (hasEliteValue) {
                const valueElite = value[1] - parseInt(lineParsed[2], 10);
                return (
                    "%" +
                    stat +
                    "% " +
                    valueNormal +
                    " / <span class='elite-color'>" +
                    valueElite +
                    "</span>"
                );
            } else {
                return (
                    "%" +
                    stat +
                    "% " +
                    extraTextForParticularBosses +
                    valueNormal
                );
            }
        }
    }

    return s;
}

export function attributesToLines(attributes) {
    if (
        !attributes ||
        (attributes[0].length === 0 && attributes[1].length === 0)
    ) {
        return [];
    } else {
        // To make it more readable, group 3 elements in the same row abd naje them small
        let attributesLines = ["* Attributes"];

        // Write common attributes in white
        const normalAttributesLines = [];
        let line = 0;
        for (let i = 0; i < attributes[0].length; i++) {
            normalAttributesLines[line] = normalAttributesLines[line]
                ? normalAttributesLines[line] + attributes[0][i] + ", "
                : attributes[0][i] + ", ";
            if ((i + 1) % 3 === 0) {
                line++;
            }
        }
        attributesLines = attributesLines.concat(
            normalAttributesLines.map((l) => {
                return l ? "**" + l.replace(/(,\s$)/g, "") : "";
            })
        );

        // Write elite attributes in Gold
        const eliteAttributesLines = [];
        // TODO
        // In case we want to show Common and Elite only attributes
        // var elite_attributes = attributes[1].map(function(elite_attribute){
        //     return ((attributes[0].indexOf(elite_attribute) == -1) ? elite_attribute: "")
        // });
        line = 0;
        for (let i = 0; i < attributes[1].length; i++) {
            eliteAttributesLines[line] = eliteAttributesLines[line]
                ? eliteAttributesLines[line] + attributes[1][i] + ", "
                : attributes[1][i] + ", ";
            if ((i + 1) % 3 === 0) {
                line++;
            }
        }

        return attributesLines.concat(
            eliteAttributesLines.map((l) => {
                return l
                    ? "** <span class='elite-color'>" +
                          l.replace(/(,\s$)/g, "") +
                          "</span>"
                    : "";
            })
        );
    }
}

export function immunitiesToLines(immunities) {
    if (!immunities) {
        return [];
    } else {
        // To make it more readable, group 3 elements in the same row abd naje them small
        const immunitiesLines = [];
        let line = 0;
        for (let i = 0; i < immunities.length; i++) {
            immunitiesLines[line] = immunitiesLines[line]
                ? immunitiesLines[line] + immunities[i] + ", "
                : immunities[i] + ", ";
            if ((i + 1) % 3 === 0) {
                line++;
            }
        }
        return ["* Immunities"].concat(
            immunitiesLines.map((l) => {
                return (
                    "** <span class='small'>" +
                    l.replace(/(,\s$)/g, "") +
                    "</span>"
                );
            })
        );
    }
}

export function notesToLines(notes) {
    return ["* <span class='small'> Notes: " + notes + "</span>"];
}

export function expandSpecial(_s, specialValue) {
    return specialValue.map((l) => {
        return "* " + l;
    });
}

export function specialToLines(s, special1, special2) {
    if (special1 && s.indexOf("Special 1") !== -1) {
        s = expandSpecial(s, special1);
    }
    if (special1 && s.indexOf("Special 2") !== -1) {
        s = expandSpecial(s, special2);
    }

    return s;
}

export function expandString(s, attack, move, range) {
    const re = new RegExp("%(attack|move|range)% (\\+|-)(\\d*)", "g");
    let found;
    // tslint:disable-next-line: no-conditional-assignment
    while ((found = re.exec(s))) {
        if (found[1] === "attack") {
            s = s.replace(found[0], expandStat(found[0], "attack", attack));
        } else if (found[1] === "move") {
            s = s.replace(found[0], expandStat(found[0], "move", move));
        } else if (found[1] === "range") {
            s = s.replace(found[0], expandStat(found[0], "range", range));
        }
    }

    return s.replace(/%[^%]*%/gi, expandMacro);
}
