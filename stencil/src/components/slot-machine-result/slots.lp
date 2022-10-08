% This program is used to generate an ordered list of slot combinations that obey certain constraints.
% The input items for the columns, and valid cloud/app combinations can be specified as facts in the first two sections.
% The third and fourth sections are used to generate possible solutions, and shouldn't need to be modified.

% Generate a solution using the following command:
% clingo slots.lp --parallel-mode 8
% See https://github.com/potassco/clingo for more information about clingo.
% clingo can be installed using Homebrew with `brew install clingo`

% --- Section 1 - Define the choices for each column ---

% Left-column items. (Languages)
left(csharp).
left(go).
left(java).
left(python).
left(typescript).
left(yaml).

% Middle-column items. (Clouds)
mid(aws).
mid(azure).
mid(gcp).
mid(kubernetes).

% Right-column items. (Apps)
right(aks).
right(helm).
right(nginx).
right(eks).
right(gke).

% --- End Section 1 ---

% --- Section 2 - Enumerate valid cloud/app combos ---

valid(L,aws,eks) :- left(L).
valid(L,azure,aks) :- left(L).
valid(L,gcp,gke) :- left(L).
valid(L,kubernetes,helm) :- left(L).
valid(L,kubernetes,nginx) :- left(L).
sequence(typescript,kubernetes,nginx,1).
sequence(yaml,aws,eks,2).
sequence(java,azure,aks,3).

% --- End Section 2---

% --- Section 3 - Generate solutions ---

% Count possible combinations.
combos(X) :- X = #count { combo(L,M,R) : left(L), mid(M), right(R), valid(L,M,R) }.

% Generate possible sequences.
{ sequence(L,M,R,1..N) } :- left(L), mid(M), right(R), combos(N), valid(L,M,R).

% --- End Section 3 ---

% --- Section 4 - Constrain possible solutions ---

% Solution requires exact number of steps.
:- #count {N : sequence(_,_,_,N)} < X, combos(X).

% No sequences with the same number.
:- sequence(L,M,R,X), sequence(L,M,R,Y), X != Y.

% No consecutive sequence with same columns.
:- sequence(L,_,_,X), sequence(L,_,_,X+1).
:- sequence(_,M,_,X), sequence(_,M,_,X+1).
:- sequence(_,_,R,X), sequence(_,_,R,X+1).

% --- End Section 4 ---

% Print solution sequence.
#show sequence/4.

