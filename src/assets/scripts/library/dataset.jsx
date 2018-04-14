'use strict';
/**
 * Data Set
 *
 * @package     MHW Calculator
 * @author      Scar Wu
 * @copyright   Copyright (c) Scar Wu (http://scar.tw)
 * @link        https://github.com/scarwu/MHWCalculator
 */

// Load JSON Data
import Skills from '../../json/skills.json';
import Jewels from '../../json/jewels.json';
import Charms from '../../json/charms.json';
import Armors from '../../json/armors.json';
import Weapons from '../../json/weapons.json';
import Sets from '../../json/sets.json';
import Enhances from '../../json/enhances.json';

/**
 * Set Helper
 */
class SetHelper {

    constructor (list) {
        this.mapping = {};

        list.map((data) => {
            this.mapping[data.name] = data;
        });

        // Filter Conditional
        this.filterSkillKey = null;
    }

    getKeys = () => {
        return Object.keys(this.mapping);
    };

    getItems = () => {
        return Object.values(this.mapping).filter((data) => {
            if (null !== this.filterSkillKey) {
                if (this.filterSkillKey !== data.skill.key) {
                    return false;
                }
            }

            return true;
        });
    };

    getInfo = (key) => {
        return undefined !== this.mapping[key]
            ? this.mapping[key] : null;
    };

    hasSkill = (key) => {
        this.filterSkillKey = key;

        return this;
    };
}

/**
 * Enhance Helper
 */
class EnhanceHelper {

    constructor (list) {
        this.mapping = {};

        list.map((data) => {
            this.mapping[data.name] = data;
        });

        // Filter Conditional
        this.filterSkillKey = null;
    }

    getKeys = () => {
        return Object.keys(this.mapping);
    };

    getItems = () => {
        return Object.values(this.mapping).filter((data) => {
            if (null !== this.filterSkillKey) {
                if (this.filterSkillKey !== data.skill.key) {
                    return false;
                }
            }

            return true;
        });
    };

    getInfo = (key) => {
        return undefined !== this.mapping[key]
            ? this.mapping[key] : null;
    };

    hasSkill = (key) => {
        this.filterSkillKey = key;

        return this;
    };
}

/**
 * Weapon Helper
 */
class WeaponHelper {

    constructor (list) {
        this.mapping = {};

        list.map((data) => {
            this.mapping[data.name] = data;
        });

        // Filter Conditional
        this.filterType = null;
        this.filterElementType = null;
        this.filterAttack = null;
        this.filterCriticalRate = null;
        this.filterDefense = null;
        this.filterElementValue = null;
        this.filterSlotCount = null;
    }

    getInfo = (key) => {
        return (undefined !== this.mapping[key])
            ? this.mapping[key] : null;
    };

    getKeys = () => {
        return Object.keys(this.mapping);
    };

    getItems = () => {
        return Object.values(this.mapping);
    };

    // Applyed Info
    getApplyedInfo = (extend) => {
        let info = this.getInfo(extend.key);

        if (null !== extend.enhances) {
            let enhanceTimes = [];

            if (8 === info.rare) {
                enhanceTimes = [...Array(1).keys()];
            } else if (7 === info.rare) {
                enhanceTimes = [...Array(2).keys()];
            } else if (6 === info.rare) {
                enhanceTimes = [...Array(3).keys()];
            }

            enhanceTimes.map((data, index) => {

            });
        }

        if (null !== extend.slots) {
            info.slots.sort((a, b) => {
                return a.size < b.size;
            }).map(() => {

            });
        }

        return info;
    };

    // Conditional Functions
    typeIs = (text) => {
        this.filterType = text;

        return this;
    };

    elementTypeIs = (text) => {
        this.filterElementType = text;

        return this;
    };

    attackIsGreaterEqualThen = (value) => {
        this.filterAttack = value;

        return this;
    };

    criticalRateIsGreaterEqualThen = (value) => {
        this.filterCriticalRate = value;

        return this;
    };

    defenseIsGreaterEqualThen = (value) => {
        this.filterDefense = value;

        return this;
    };

    elementValueIsGreaterEqualThen = (value) => {
        this.filterElementValue = value;

        return this;
    };

    slotCountIsGreaterEqualThen = (value) => {
        this.filterSlotCount = value;

        return this;
    };
}

/**
 * Armor Helper
 */
class ArmorHelper {

    constructor (list) {
        this.mapping = {};

        list.map((data) => {
            this.mapping[data.name] = data;
        });

        // Filter Conditional
        this.filterSkillKey = null;
    }

    getKeys = () => {
        return Object.keys(this.mapping);
    };

    getItems = () => {
        return Object.values(this.mapping).filter((data) => {
            let isSkip = true;

            if (null !== this.filterSkillKey) {
                for (let index in data.skills) {
                    if (this.filterSkillKey !== data.skills[index].key) {
                        continue;
                    }

                    isSkip = false;
                }

                if (isSkip) {
                    return false;
                }
            }

            return true;
        });
    };

    getInfo = (key) => {
        return undefined !== this.mapping[key]
            ? this.mapping[key] : null;
    };

    // Conditional Functions
    hasSkill = (key) => {
        this.filterSkillKey = key;

        return this;
    };
}

/**
 * Charm Helper
 */
class CharmHelper {

    constructor (list) {
        this.mapping = {};

        list.map((data) => {
            this.mapping[data.name] = data;
        });

        // Filter Conditional
        this.filterSkillKey = null;
    }

    getKeys = () => {
        return Object.keys(this.mapping);
    };

    getItems = () => {
        return Object.values(this.mapping).filter((data) => {
            let isSkip = true;

            if (null !== this.filterSkillKey) {
                for (let index in data.skills) {
                    if (this.filterSkillKey !== data.skills[index].key) {
                        continue;
                    }

                    isSkip = false;
                }

                if (isSkip) {
                    return false;
                }
            }

            return true;
        });
    };

    getInfo = (key) => {
        return undefined !== this.mapping[key]
            ? this.mapping[key] : null;
    };

    // Conditional Functions
    hasSkill = (key) => {
        this.filterSkillKey = key;

        return this;
    };
}

/**
 * Jewel Helper
 */
class JewelHelper {

    constructor (list) {
        this.mapping = {};

        list.map((data) => {
            this.mapping[data.name] = data;
        });

        // Filter Conditional
        this.filterSkillKey = null;
    }

    getKeys = () => {
        return Object.keys(this.mapping);
    };

    getItems = () => {
        return Object.values(this.mapping).filter((data) => {
            if (null !== this.filterSkillKey) {
                if (this.filterSkillKey !== data.skill.key) {
                    return false;
                }
            }

            return true;
        });
    };

    getInfo = (key) => {
        return undefined !== this.mapping[key]
            ? this.mapping[key] : null;
    };

    hasSkill = (key) => {
        this.filterSkillKey = key;

        return this;
    };
}

/**
 * Skill Helper
 */
class SkillHelper {

    constructor (list) {
        this.mapping = {};

        list.map((data) => {
            this.mapping[data.name] = data;
        });
    }

    getKeys = () => {
        return Object.keys(this.mapping);
    };

    getItems = () => {
        return Object.values(this.mapping);
    };

    getInfo = (key) => {
        return undefined !== this.mapping[key]
            ? this.mapping[key] : null;
    };
}

let setHelper = new SetHelper(Sets);
let enhanceHelper = new EnhanceHelper(Enhances);
let weaponHelper = new WeaponHelper(Weapons);
let armorHelper = new ArmorHelper(Armors);
let charmHelper = new CharmHelper(Charms);
let jewelHelper = new JewelHelper(Jewels);
let skillHelper = new SkillHelper(Skills);

export default {
    setHelper: setHelper,
    enhanceHelper: enhanceHelper,
    weaponHelper: weaponHelper,
    armorHelper: armorHelper,
    charmHelper: charmHelper,
    jewelHelper: jewelHelper,
    skillHelper: skillHelper
};
