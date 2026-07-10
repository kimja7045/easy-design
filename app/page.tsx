"use client";

import Image from "next/image";
import {
  Check,
  ChevronDown,
  Grid2X2,
  Heart,
  Search,
  Share2,
  SlidersHorizontal,
} from "lucide-react";
import { useMemo, useState } from "react";

const moods = ["자연스러운 순간", "정갈한 구도", "필름 톤", "흑백"];

const moments = [
  {
    id: 1,
    title: "버진 로드",
    category: "본식",
    time: "오후 2:18",
    src: "/images/ceremony.webp",
    alt: "밝은 채플의 버진 로드를 함께 걷는 신랑 신부",
  },
  {
    id: 2,
    title: "서로를 보는 순간",
    category: "인물",
    time: "오후 2:31",
    src: "/images/portrait.webp",
    alt: "밝은 창가에서 서로를 바라보는 신랑 신부",
  },
  {
    id: 3,
    title: "부케와 약속",
    category: "디테일",
    time: "오후 1:42",
    src: "/images/bouquet.webp",
    alt: "버건디와 아이보리 꽃으로 만든 부케를 든 신부의 손",
  },
  {
    id: 4,
    title: "가족의 축배",
    category: "연회",
    time: "오후 5:06",
    src: "/images/reception.webp",
    alt: "밝은 연회장에서 가족과 축배를 나누는 신랑 신부",
  },
];

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [selectedIds, setSelectedIds] = useState(() => new Set([1, 3]));
  const [activeFilter, setActiveFilter] = useState("전체");
  const [isCurating, setIsCurating] = useState(false);
  const [brief, setBrief] = useState(
    "화이트 채플의 자연광, 두 사람의 다정한 시선, 절제된 버건디 플라워",
  );

  const selectedCount = selectedIds.size;
  const progress = useMemo(() => Math.round((selectedCount / 30) * 100), [selectedCount]);

  const toggleSelection = (id: number) => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Lumen Vows 홈">
          <span className="brand-symbol" aria-hidden="true">LV</span>
          <span>Lumen Vows</span>
        </a>
        <nav className="topbar-nav" aria-label="주요 메뉴">
          <a href="#collection">컬렉션</a>
          <a href="#selection">셀렉트</a>
          <button className="icon-button" type="button" aria-label="컬렉션 공유" title="공유">
            <Share2 size={18} strokeWidth={1.7} />
          </button>
          <button className="profile-button" type="button" aria-label="프로필 열기">YJ</button>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">Your wedding, quietly preserved</p>
          <h1 id="page-title">오래 남을 장면을<br />고르세요.</h1>
          <p className="hero-description">
            빛과 표정, 그리고 두 사람다운 순간을 한곳에서 살펴보고
            가장 소중한 사진만 천천히 골라보세요.
          </p>
          <div className="wedding-meta" aria-label="웨딩 정보">
            <span>Yujin &amp; Junseo</span>
            <span>2026. 05. 24</span>
          </div>
        </div>

        <figure className="featured-frame">
          <Image
            src="/images/ceremony.webp"
            alt="밝은 채플에서 함께 버진 로드를 걷는 신랑 신부"
            fill
            loading="eager"
            priority
            sizes="(max-width: 760px) 100vw, 58vw"
          />
          <figcaption>
            <span>01</span>
            <span>The ceremony</span>
          </figcaption>
        </figure>
      </section>

      <section className="collection-brief" aria-labelledby="brief-title">
        <div className="brief-heading">
          <p className="eyebrow" id="brief-title">오늘의 컬렉션</p>
          <p>빛과 표정을 기준으로 정리합니다</p>
        </div>
        <form
          className="brief-form"
          onSubmit={(event) => {
            event.preventDefault();
            setIsCurating(true);
            window.setTimeout(() => setIsCurating(false), 1200);
          }}
        >
          <label htmlFor="brief">원하는 분위기</label>
          <div className="brief-field">
            <Search size={18} aria-hidden="true" />
            <input id="brief" value={brief} onChange={(event) => setBrief(event.target.value)} />
          </div>
          <div className="mood-row" aria-label="사진 분위기">
            {moods.map((mood) => (
              <button
                key={mood}
                type="button"
                className="mood-chip"
                aria-pressed={selectedMood === mood}
                onClick={() => setSelectedMood(mood)}
              >
                {mood}
              </button>
            ))}
          </div>
          <button className="curate-button" type="submit">
            {isCurating ? <span className="button-loader" aria-hidden="true" /> : null}
            {isCurating ? "정리하는 중" : "컬렉션 만들기"}
          </button>
        </form>
      </section>

      <section className="workspace" id="collection" aria-label="웨딩 사진 컬렉션">
        <aside className="selection-panel" id="selection" aria-labelledby="selection-title">
          <p className="eyebrow">Photo select</p>
          <div className="selection-title-row">
            <h2 id="selection-title">사진 셀렉트</h2>
            <span>{selectedCount} / 30</span>
          </div>
          <div className="progress-track" aria-label={`셀렉트 ${progress}% 완료`}>
            <span style={{ width: `${Math.max(progress, 4)}%` }} />
          </div>
          <p className="selection-copy">앨범에 담을 30장의 사진을 골라주세요.</p>

          <div className="collection-groups">
            {[
              ["본식", "128"],
              ["인물", "96"],
              ["디테일", "74"],
              ["연회", "122"],
            ].map(([label, count]) => (
              <button type="button" key={label}>
                <span>{label}</span>
                <span>{count}</span>
              </button>
            ))}
          </div>

          <button className="selection-button" type="button" disabled={selectedCount === 0}>
            선택한 사진 보기
            <span>{selectedCount}</span>
          </button>
        </aside>

        <div className="gallery-wrap">
          <div className="gallery-toolbar">
            <div>
              <p className="eyebrow">420 photographs</p>
              <h2>두 사람의 하루</h2>
            </div>
            <div className="toolbar-actions">
              <div className="filter-tabs" aria-label="사진 필터">
                {["전체", "본식", "인물", "디테일"].map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    aria-pressed={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <button className="icon-button" type="button" aria-label="상세 필터" title="필터">
                <SlidersHorizontal size={18} strokeWidth={1.7} />
              </button>
              <button className="icon-button" type="button" aria-label="그리드 보기" title="그리드">
                <Grid2X2 size={18} strokeWidth={1.7} />
              </button>
            </div>
          </div>

          <div className="photo-grid">
            {moments.map((moment) => {
              const isSelected = selectedIds.has(moment.id);
              return (
                <article className="photo-card" data-selected={isSelected} key={moment.id}>
                  <div className="photo-media">
                    <Image src={moment.src} alt={moment.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                    <button
                      className="select-control"
                      type="button"
                      aria-label={`${moment.title} ${isSelected ? "선택 해제" : "선택"}`}
                      aria-pressed={isSelected}
                      onClick={() => toggleSelection(moment.id)}
                    >
                      {isSelected ? <Check size={17} strokeWidth={2.4} /> : null}
                    </button>
                    <button className="favorite-button" type="button" aria-label={`${moment.title} 즐겨찾기`} title="즐겨찾기">
                      <Heart size={18} strokeWidth={1.8} />
                    </button>
                  </div>
                  <div className="photo-caption">
                    <div>
                      <h3>{moment.title}</h3>
                      <p>{moment.category} · {moment.time}</p>
                    </div>
                    <button type="button" aria-label={`${moment.title} 메뉴`} title="사진 메뉴">
                      <ChevronDown size={18} strokeWidth={1.7} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
