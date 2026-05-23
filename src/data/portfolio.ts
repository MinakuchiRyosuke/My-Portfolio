// プロフィール情報定義.
export interface Profile{
    name: string // 名前漢字表記.
    nameEn: string // 名前ローマ字表記.
    role: string // ロール.
    school: string // 学校名.
    department: string // 専攻名.
    graduationYear: string // 卒業年度.
    bio: string // 自己紹介文.
    motto: string // モットー、座右の銘.
    avatar: string // 顔写真の画像パス.
    links:{
        github:string // githubのURL.
        twitter: string | null // X(旧Twitter).
        email: string // メールアドレス.
    }
}

// スキル.
export interface Skill {
    name: string // 名前.
    version: string | null // バージョン情報(null許容).
    level: number // スキルレベル.
    category: string // カテゴリ.
    capabilities : string // 出来ること.
    note: string | null // 実装経験.
}

// 詳細要素情報.
export interface Venue{
    name: string // 名前.
    date: string // 日時.
}

