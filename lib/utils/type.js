type EduType = {
    time: string,
    school: string,
    special: string,
}

type WorkType = {
    item: string,
    time: string,
    detail: ?string[],
}

type SkillType = {
    item: string,
    detail: ?string[],
}

type ExperiencesType = {
    item: string,
    link: string,
    detail: string,
}

type ContactType = {
    tel: string,
    email: string,
    github: string,
}

export type ConfigType = {
    name: string,
    abstract: string,
    edu: ?EduType[],
    cet6: string,
    work: ?WorkType[],
    skill: ?SkillType[],
    experiences: ?ExperiencesType[],
    contact: ContactType,
}
