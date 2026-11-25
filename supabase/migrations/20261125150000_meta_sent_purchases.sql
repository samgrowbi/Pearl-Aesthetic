-- Tracks which Acuity appointments already had a Meta Purchase event sent,
-- so the acuity-webhook function sends each check-in only once.
create table if not exists public.meta_sent_purchases (
  appointment_id text primary key,
  sent_at timestamptz not null default now()
);

-- Only the edge function (service role) uses this table.
alter table public.meta_sent_purchases enable row level security;
