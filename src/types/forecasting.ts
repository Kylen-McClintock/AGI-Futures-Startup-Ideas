export type ForecastStatus = 'proposed' | 'live' | 'resolved' | 'rejected';

export type ForecastType = 
    | 'binary' 
    | 'binary_by_deadline' 
    | 'multiple_choice' 
    | 'year_or_never' 
    | 'bucketed_magnitude' 
    | 'cause_mechanism' 
    | 'company_actor';

export interface Forecast {
    id: string;
    slug?: string;
    profile_id: string | null;
    status: ForecastStatus;
    type: ForecastType;
    condition: string | null;
    question: string;
    options: string[] | null;
    deadline: string | null; // ISO timestamp
    resolution_criteria: string | null;
    sector?: string[] | null;
    enabling_technology?: string[] | null;
    ai_importance_score?: number;
    user_importance_ratings?: Record<string, number> | null;
    created_at: string;
    updated_at: string;
}

export interface ForecastVote {
    profile_id: string;
    forecast_id: string;
    created_at: string;
}

export interface ForecastComment {
    id: string;
    forecast_id: string;
    profile_id: string;
    content: string;
    created_at: string;
}

export type AnswerMode = 'quick' | 'advanced';

// We type AnswerData as any to allow flexibility, but we can type guard it based on context
export interface ForecastAnswer {
    id: string;
    forecast_id: string;
    profile_id: string;
    answer_mode: AnswerMode;
    answer_data: any; 
    reasoning: string | null;
    created_at: string;
    updated_at: string;
}
